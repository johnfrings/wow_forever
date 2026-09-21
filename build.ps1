<#
  Bundles index.html + styles.css + app.js + the talent data + img/*.jpg into one minified spa.html.
  Plain PowerShell (ships with Windows) - no Node or Python.

    powershell -ExecutionPolicy Bypass -File build.ps1

  The separate files stay the source of truth. Re-run this after editing the data file or the app.
#>
param(
  [string]$DataFile = 'pala_talents_1.60.1.js',
  [string]$Out = 'spa.html'
)
$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding($false)
function Read([string]$p) { [IO.File]::ReadAllText((Join-Path $PSScriptRoot $p), $utf8) }

# Remove whitespace that sits outside of string literals (data file: object/array literals only).
function Compress-Literal([string]$s) {
  $sb = New-Object System.Text.StringBuilder
  $quote = [char]0
  for ($i = 0; $i -lt $s.Length; $i++) {
    $c = $s[$i]
    if ($quote -ne [char]0) {
      [void]$sb.Append($c)
      if ($c -eq '\') { $i++; [void]$sb.Append($s[$i]) }
      elseif ($c -eq $quote) { $quote = [char]0 }
    }
    elseif ($c -eq '"' -or $c -eq "'") { $quote = $c; [void]$sb.Append($c) }
    elseif (-not [char]::IsWhiteSpace($c)) { [void]$sb.Append($c) }
  }
  $sb.ToString()
}

# CSS: comments and insignificant whitespace (spaces around * + - are kept for calc()).
function Compress-Css([string]$s) {
  $s = [regex]::Replace($s, '/\*.*?\*/', '', 'Singleline')
  $s = [regex]::Replace($s, '\s+', ' ')
  $s = [regex]::Replace($s, '\s*([{};,>])\s*', '$1')
  $s = [regex]::Replace($s, ':\s+', ':')
  $s = $s.Replace(';}', '}')
  $s.Trim()
}

# JS: comments, indentation and blank lines. Newlines stay, so automatic semicolon insertion is unaffected.
function Compress-Js([string]$s) {
  $s = [regex]::Replace($s, '(?m)^\s*/\*.*?\*/\s*$', '', 'Singleline')    # block comments on their own lines
  $s = [regex]::Replace($s, '/\*[^*\r\n]*\*/', '')                          # short inline block comments
  $lines = foreach ($l in ($s -split "\r?\n")) {
    $t = [regex]::Replace($l, '(?<=\s)//\s.*$', '').Trim()               # trailing " // comment"
    if ($t -and -not $t.StartsWith('//')) { $t }
  }
  $lines -join "`n"
}

# --- pieces ---------------------------------------------------------------------------------
$css = Compress-Css (Read 'styles.css')
$app = Compress-Js (Read 'app.js')

$data = Read $DataFile
$data = [regex]::Replace($data, '/\*.*?\*/', '', 'Singleline')
$data = $data -replace '^\s*window\.TALENT_DATA\s*=\s*', '' -replace ';\s*$', ''
$data = Compress-Literal $data

$icons = New-Object System.Collections.Generic.List[string]
foreach ($f in Get-ChildItem -LiteralPath (Join-Path $PSScriptRoot 'img') -Filter *.jpg | Sort-Object Name) {
  $b64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($f.FullName))
  $icons.Add('"' + $f.Name + '":"data:image/jpeg;base64,' + $b64 + '"')
}
$iconJs = 'window.TALENT_ICONS={' + ($icons -join ',') + '};'

# --- page -----------------------------------------------------------------------------------
$html = Read 'index.html'
$html = [regex]::Replace($html, '<link rel="stylesheet"[^>]*>', { '<style>' + $css + '</style>' })
$html = [regex]::Replace($html, '\s*<script defer src="app.js"></script>', '')
$html = [regex]::Replace($html, '<!--.*?-->', '', 'Singleline')
$html = [regex]::Replace($html, '>\s+<', '><')                          # whitespace between tags
# Scripts go in last, at the end of <body>, so #app exists when they run and their text is left untouched.
$scripts = '<script>window.TALENT_DATA=' + $data + ';' + $iconJs + '</script><script>' + $app + '</script>'
$html = $html.Replace('</body>', $scripts + '</body>')

[IO.File]::WriteAllText((Join-Path $PSScriptRoot $Out), $html, $utf8)
$kb = [math]::Round((Get-Item (Join-Path $PSScriptRoot $Out)).Length / 1KB)
"Wrote $Out ($kb KB): $($icons.Count) icons, data from $DataFile"
