/*
 * Talent calculator. Everything about the talents (specs, grid, ranks, prerequisites,
 * icons) comes from the JSON file at runtime; nothing here is specific to Paladins.
 */
(() => {
  "use strict";

  const DATA_FILE = new URLSearchParams(location.search).get("data") || "pala_talents_1.60.1.js"; // ?data=other.js to override
  const LEVEL_MIN = 10; // first talent point at level 10, one per level after
  const TALENTED_MAX = 5; // each rank of "Talented" starts talent points one level earlier
  const LEVEL_MAX = 60;
  const iconFile = (name) => encodeURIComponent(name.toLowerCase()) + ".jpg";
  const ICON_LOCAL = (name) => `img/${iconFile(name)}`; // downloaded copies
  const ICON_REMOTE = (name) => `https://wow.zamimg.com/images/wow/icons/large/${iconFile(name)}`; // fallback for icons not downloaded yet
  const BUILD_KEY = "talcalc.build.v2";

  const app = document.getElementById("app");
  const tooltip = document.getElementById("tooltip");

  let model = null; // normalized data
  let currentText = ""; // JSON of the data currently loaded, to detect edits
  let state = { level: LEVEL_MAX, talented: 0, ranks: {} };
  let message = "";
  let hoverId = null;
  let mouse = { x: 0, y: 0 };

  /* ------------------------------------------------------------------ data */

  function normalize(data) {
    if (!data || !Array.isArray(data.specs)) throw new Error('JSON must have a "specs" array.');
    const warnings = [];
    const byId = new Map();
    const specs = data.specs.map((s, si) => {
      const width = Number(s.grid?.width) || 4;
      const height = Number(s.grid?.height) || 7;
      const spec = { name: String(s.spec ?? `Spec ${si + 1}`), width, height, talents: [] };
      for (const raw of s.talents || []) {
        const id = String(raw.id);
        const ranks = [...(raw.ranks || [])].sort((a, b) => a.rank - b.rank).map((r) => String(r.description ?? ""));
        const row = Number(raw.position?.row);
        const col = Number(raw.position?.col);
        if (byId.has(id)) { warnings.push(`Duplicate talent id "${id}" (${raw.name}) ignored.`); continue; }
        if (!ranks.length) { warnings.push(`${raw.name} (${id}) has no ranks and was skipped.`); continue; }
        if (!(row >= 1 && row <= height && col >= 1 && col <= width)) {
          warnings.push(`${raw.name} (${id}) is outside the ${width}x${height} ${spec.name} grid and was skipped.`);
          continue;
        }
        const iconName = raw.icon?.name && raw.icon.name !== "dummy_icon" ? String(raw.icon.name) : "";
        const talent = {
          id, spec, row, col, ranks, max: ranks.length, icon: iconName,
          name: String(raw.name ?? id),
          prereqs: (raw.prerequisites || []).map((p) => ({ type: p.type, value: p.value })),
        };
        spec.talents.push(talent);
        byId.set(id, talent);
      }
      spec.talents.sort((a, b) => a.row - b.row || a.col - b.col);
      spec.talents.forEach((t, i) => {
        const prev = spec.talents[i - 1];
        if (prev && prev.row === t.row && prev.col === t.col) warnings.push(`${prev.name} and ${t.name} share ${spec.name} row ${t.row}, column ${t.col}; they're drawn half-size side by side.`);
      });
      return spec;
    });
    const all = specs.flatMap((s) => s.talents);
    for (const t of all) {
      for (const p of t.prereqs) {
        if (p.type === "talent" && !byId.has(String(p.value))) warnings.push(`${t.name} (${t.id}) requires unknown talent "${p.value}".`);
        else if (!["talent", "talent_points_in_spec", "player_level"].includes(p.type)) warnings.push(`${t.name} (${t.id}) has unknown prerequisite type "${p.type}" (ignored).`);
      }
    }
    return { cls: data.class || "", expansion: data.expansion || "", version: data.version || "", specs, all, byId, warnings };
  }

  /* ----------------------------------------------------------------- rules */

  const spent = (ranks) => model.all.reduce((n, t) => n + (ranks[t.id] || 0), 0);
  const firstLevel = (talented) => LEVEL_MIN - talented;
  const available = (level, talented = state.talented) => Math.max(0, level - firstLevel(talented) + 1);
  const pointsBefore = (spec, row, ranks) => spec.talents.reduce((n, t) => n + (t.row < row ? ranks[t.id] || 0 : 0), 0);
  const specPoints = (spec, ranks) => spec.talents.reduce((n, t) => n + (ranks[t.id] || 0), 0);

  // Returns [{met, text}] for each known prerequisite of a talent.
  function prereqStatus(t, ranks, level) {
    const out = [];
    for (const p of t.prereqs) {
      if (p.type === "talent_points_in_spec") {
        // Like the game: only points in the rows above the talent count.
        out.push({ met: pointsBefore(t.spec, t.row, ranks) >= p.value, text: `Requires ${p.value} points in ${t.spec.name} Talents` });
      } else if (p.type === "talent") {
        const dep = model.byId.get(String(p.value));
        if (dep) out.push({ met: (ranks[dep.id] || 0) >= dep.max, text: `Requires ${dep.max} point${dep.max > 1 ? "s" : ""} in ${dep.name}` });
      } else if (p.type === "player_level") {
        out.push({ met: level >= p.value, text: `Requires level ${p.value}` });
      }
    }
    return out;
  }

  // Why a rank can't be added right now (null = it can).
  function learnBlocker(t, ranks, level, talented = state.talented) {
    if ((ranks[t.id] || 0) >= t.max) return "Already at maximum rank";
    const unmet = prereqStatus(t, ranks, level).find((p) => !p.met);
    if (unmet) return unmet.text;
    if (spent(ranks) >= available(level, talented)) return "No talent points remaining";
    return null;
  }

  // Why a rank can't be removed right now (null = it can). Simulates the removal and
  // checks that every talent that still has points remains legal.
  function unlearnBlocker(t, ranks, level) {
    if (!(ranks[t.id] > 0)) return "Not learned";
    const sim = { ...ranks, [t.id]: ranks[t.id] - 1 };
    for (const o of model.all) {
      if (!(sim[o.id] > 0)) continue;
      const unmet = prereqStatus(o, sim, level).find((p) => !p.met);
      if (unmet) return `${o.name} depends on this. ${unmet.text}`;
    }
    return null;
  }

  // Re-apply a wanted build under the current data/level, keeping whatever is still legal.
  function salvage(wanted, level, talented = state.talented) {
    const ranks = {};
    let changed = true;
    while (changed) {
      changed = false;
      for (const t of model.all) {
        while ((ranks[t.id] || 0) < Math.min(wanted[t.id] || 0, t.max) && !learnBlocker(t, ranks, level, talented)) {
          ranks[t.id] = (ranks[t.id] || 0) + 1;
          changed = true;
        }
      }
    }
    return ranks;
  }

  function talentStatus(t) {
    const r = state.ranks[t.id] || 0;
    if (r >= t.max) return "maxed";
    if (r > 0) return "partial";
    return prereqStatus(t, state.ranks, state.level).every((p) => p.met) && spent(state.ranks) < available(state.level) ? "available" : "locked";
  }

  /* --------------------------------------------------------------- actions */

  function learn(id) {
    const t = model.byId.get(id);
    if (!t) return;
    const why = learnBlocker(t, state.ranks, state.level);
    message = why || "";
    if (!why) state.ranks[id] = (state.ranks[id] || 0) + 1;
    commit();
  }

  function unlearn(id) {
    const t = model.byId.get(id);
    if (!t) return;
    const why = unlearnBlocker(t, state.ranks, state.level);
    message = why ? `Can't remove: ${why}` : "";
    if (!why) {
      state.ranks[id]--;
      if (!state.ranks[id]) delete state.ranks[id];
    }
    commit();
  }

  function resetSpec(name) {
    const spec = model.specs.find((s) => s.name === name);
    if (!spec) return;
    for (const t of spec.talents) delete state.ranks[t.id];
    state.ranks = salvage(state.ranks, state.level);
    message = "";
    commit();
  }

  function resetAll() {
    state.ranks = {};
    message = "";
    commit();
  }

  // Change level and/or Talented rank. Rejected if the current build would no longer fit.
  function setLevelAndTalented(levelIn, talentedIn) {
    const talented = Math.min(TALENTED_MAX, Math.max(0, Math.round(Number(talentedIn)) || 0));
    const level = Math.min(LEVEL_MAX, Math.max(firstLevel(talented), Math.round(Number(levelIn)) || state.level));
    const kept = salvage(state.ranks, level, talented);
    if (spent(kept) < spent(state.ranks)) {
      message = level < state.level || talented < state.talented
        ? "That leaves too few talent points for your current build. Remove some talents first."
        : "That setting conflicts with your current build.";
    } else {
      state.level = level;
      state.talented = talented;
      message = "";
    }
    commit();
  }

  /* ----------------------------------------------------------- persistence */

  function serialize() {
    const t = Object.entries(state.ranks).map(([id, r]) => `${encodeURIComponent(id)}:${r}`).join(",");
    return `l=${state.level}&z=${state.talented}&t=${t}`;
  }

  function deserialize(str) {
    const p = new URLSearchParams(str);
    const talented = Math.min(TALENTED_MAX, Math.max(0, parseInt(p.get("z"), 10) || 0));
    const level = Math.min(LEVEL_MAX, Math.max(firstLevel(talented), parseInt(p.get("l"), 10) || LEVEL_MAX));
    const wanted = {};
    for (const part of (p.get("t") || "").split(",")) {
      const [id, r] = part.split(":");
      if (id && model.byId.has(id)) wanted[id] = parseInt(r, 10) || 0;
    }
    return { level, talented, ranks: salvage(wanted, level, talented) };
  }

  function commit() {
    const s = serialize();
    try { history.replaceState(null, "", `#${s}`); } catch { /* ignore */ }
    try { localStorage.setItem(BUILD_KEY, s); } catch { /* ignore */ }
    render();
  }

  function restoreBuild() {
    let s = location.hash.slice(1);
    if (!s) { try { s = localStorage.getItem(BUILD_KEY) || ""; } catch { /* ignore */ } }
    state = s ? deserialize(s) : { level: LEVEL_MAX, talented: 0, ranks: {} };
  }

  /* ---------------------------------------------------------------- render */

  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function render() {
    const total = available(state.level);
    const used = spent(state.ranks);
    document.title = `${model.cls} Talent Calculator`.trim();
    document.getElementById("title").textContent = `${model.cls} Talent Calculator`.trim();
    document.getElementById("eyebrow").textContent = [model.expansion, model.version && `v${model.version}`].filter(Boolean).join(" · ");

    app.innerHTML = `
      <section class="toolbar">
        <label class="field">Level
          <input id="level" type="number" min="${firstLevel(state.talented)}" max="${LEVEL_MAX}" value="${state.level}" />
        </label>
        <div class="field">
          <span title="Each rank of Talented lets you start picking talents one level earlier">Talented</span>
          <div class="seg" role="group" aria-label="Talented rank">
            ${Array.from({ length: TALENTED_MAX + 1 }, (_, n) => `<button type="button" class="${n === state.talented ? "on" : ""}" data-talented="${n}" aria-pressed="${n === state.talented}">${n}</button>`).join("")}
          </div>
        </div>
        <div class="points" title="Talent points remaining">
          <span class="points-left ${used > total ? "over" : ""}">${total - used}</span>
          <span class="points-label">points left <small>(${used} / ${total} spent)</small></span>
        </div>
        <div class="toolbar-buttons">
          <button type="button" data-action="copy">Copy link</button>
          <button type="button" data-action="reset-all">Reset all</button>
          <button type="button" data-action="reload" title="Re-read the data file (also happens when you return to this tab)">Reload data</button>
        </div>
        <p class="status" role="status">${esc(message)}</p>
      </section>
      <section class="trees">${model.specs.map(renderSpec).join("")}</section>
      ${model.warnings.length ? `<details class="notes"><summary>${model.warnings.length} data warning${model.warnings.length > 1 ? "s" : ""}</summary><ul>${model.warnings.map((w) => `<li>${esc(w)}</li>`).join("")}</ul></details>` : ""}
    `;
    if (hoverId) showTooltip(hoverId);
  }

  function renderSpec(spec) {
    const cells = new Map();
    for (const t of spec.talents) {
      const k = `${t.row}:${t.col}`;
      (cells.get(k) || cells.set(k, []).get(k)).push(t);
    }
    const cellHtml = [...cells.values()].map((list) => {
      const { row, col } = list[0];
      return `<div class="cell n${Math.min(list.length, 4)}" style="grid-row:${row};grid-column:${col}">${list.map(renderTalent).join("")}</div>`;
    }).join("");
    return `
      <article class="tree">
        <header class="tree-head">
          <h2>${esc(spec.name)}</h2>
          <span class="tree-points">${specPoints(spec, state.ranks)}</span>
          <button type="button" class="link" data-action="reset-spec" data-spec="${esc(spec.name)}">Reset</button>
        </header>
        <div class="grid" style="--w:${spec.width};--h:${spec.height}">
          <svg class="arrows" viewBox="0 0 ${spec.width} ${spec.height}" aria-hidden="true">${renderArrows(spec)}</svg>
          ${cellHtml}
        </div>
      </article>`;
  }

  function renderTalent(t) {
    const r = state.ranks[t.id] || 0;
    const status = talentStatus(t);
    const icon = t.icon
      ? `<img src="${esc(ICON_LOCAL(t.icon))}" data-remote="${esc(ICON_REMOTE(t.icon))}" alt="" draggable="false" />`
      : `<span class="ph">${esc(t.name.charAt(0).toUpperCase())}</span>`;
    return `<button type="button" class="talent is-${status}" data-id="${esc(t.id)}" aria-label="${esc(t.name)}, rank ${r} of ${t.max}">${icon}<span class="rank">${r}</span></button>`;
  }

  // Arrow from a required talent to the talent that depends on it, in grid-cell units.
  function renderArrows(spec) {
    const centre = (t) => {
      const n = spec.talents.filter((o) => o.row === t.row && o.col === t.col);
      const size = n.length > 1 ? 0.92 / Math.min(n.length, 4) : 0.58; // icon width in cell units; keep in step with styles.css
      const i = n.indexOf(t);
      return { x: t.col - 1 + (n.length > 1 ? (i + 0.5) / n.length : 0.5), y: t.row - 0.5, r: size / 2 + 0.05 };
    };
    let out = "";
    for (const t of spec.talents) {
      for (const p of t.prereqs) {
        if (p.type !== "talent") continue;
        const src = model.byId.get(String(p.value));
        if (!src || src.spec !== spec) continue;
        const a = centre(src), b = centre(t);
        const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy);
        if (len <= a.r + b.r + 0.1) continue;
        const ux = dx / len, uy = dy / len;
        const x1 = a.x + ux * a.r, y1 = a.y + uy * a.r;
        const x2 = b.x - ux * b.r, y2 = b.y - uy * b.r;
        const head = 0.15, wing = 0.1;
        const bx = x2 - ux * head, by = y2 - uy * head;
        const met = (state.ranks[src.id] || 0) >= src.max;
        out += `<g class="arrow ${met ? "on" : ""}"><line x1="${x1}" y1="${y1}" x2="${bx}" y2="${by}"/>` +
          `<polygon points="${x2},${y2} ${bx - uy * wing},${by + ux * wing} ${bx + uy * wing},${by - ux * wing}"/></g>`;
      }
    }
    return out;
  }

  /* --------------------------------------------------------------- tooltip */

  function showTooltip(id) {
    const t = model.byId.get(id);
    if (!t) return hideTooltip();
    const r = state.ranks[t.id] || 0;
    const unmet = r < t.max ? prereqStatus(t, state.ranks, state.level).filter((p) => !p.met) : [];
    let html = `<div class="tt-name">${esc(t.name)}</div><div class="tt-rank">Rank ${r}/${t.max}</div>`;
    html += `<div class="tt-desc">${esc(t.ranks[Math.max(r, 1) - 1])}</div>`;
    if (r > 0 && r < t.max) html += `<div class="tt-next">Next rank:</div><div class="tt-desc">${esc(t.ranks[r])}</div>`;
    for (const p of unmet) html += `<div class="tt-req">${esc(p.text)}</div>`;
    if (r < t.max && !unmet.length) html += `<div class="tt-hint ${learnBlocker(t, state.ranks, state.level) ? "tt-req" : ""}">${esc(learnBlocker(t, state.ranks, state.level) || "Click to learn")}</div>`;
    if (r > 0) html += `<div class="tt-hint">Right-click to unlearn</div>`;
    tooltip.innerHTML = html;
    tooltip.hidden = false;
    placeTooltip();
  }

  function placeTooltip() {
    const pad = 16, w = tooltip.offsetWidth, h = tooltip.offsetHeight;
    let x = mouse.x + pad, y = mouse.y + pad;
    if (x + w > innerWidth - 8) x = mouse.x - w - pad;
    if (y + h > innerHeight - 8) y = mouse.y - h - pad;
    tooltip.style.left = `${Math.max(8, x)}px`;
    tooltip.style.top = `${Math.max(8, y)}px`;
  }

  function hideTooltip() {
    hoverId = null;
    tooltip.hidden = true;
  }

  /* ---------------------------------------------------------------- events */

  const talentEl = (e) => e.target.closest?.(".talent");

  app.addEventListener("click", (e) => {
    const el = talentEl(e);
    if (el) return e.shiftKey || e.ctrlKey ? unlearn(el.dataset.id) : learn(el.dataset.id);
    const tal = e.target.closest("[data-talented]");
    if (tal) return setLevelAndTalented(state.level, tal.dataset.talented);
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const a = btn.dataset.action;
    if (a === "reset-spec") resetSpec(btn.dataset.spec);
    else if (a === "reset-all") resetAll();
    else if (a === "reload") refreshData(false);
    else if (a === "copy") copyLink();
  });

  app.addEventListener("contextmenu", (e) => {
    const el = talentEl(e);
    if (!el) return;
    e.preventDefault();
    unlearn(el.dataset.id);
  });

  app.addEventListener("keydown", (e) => {
    const el = talentEl(e);
    if (el && (e.key === "Delete" || e.key === "Backspace")) { e.preventDefault(); unlearn(el.dataset.id); }
  });

  app.addEventListener("change", (e) => { if (e.target.id === "level") setLevelAndTalented(e.target.value, state.talented); });

  app.addEventListener("mouseover", (e) => {
    const el = talentEl(e);
    if (!el) return;
    mouse = { x: e.clientX, y: e.clientY };
    hoverId = el.dataset.id;
    showTooltip(hoverId);
  });
  app.addEventListener("mousemove", (e) => {
    if (tooltip.hidden) return;
    mouse = { x: e.clientX, y: e.clientY };
    placeTooltip();
  });
  app.addEventListener("mouseout", (e) => {
    const el = talentEl(e);
    if (el && !el.contains(e.relatedTarget)) hideTooltip();
  });

  // Icons that fail to load (offline, unknown name) fall back to a letter tile.
  app.addEventListener("error", (e) => {
    const img = e.target;
    if (img.tagName !== "IMG") return;
    if (img.dataset.remote) { // not in img/ yet: try the web once
      img.src = img.dataset.remote;
      delete img.dataset.remote;
      return;
    }
    const name = img.closest(".talent")?.getAttribute("aria-label") || "?";
    const ph = document.createElement("span");
    ph.className = "ph";
    ph.textContent = name.charAt(0).toUpperCase();
    img.replaceWith(ph);
  }, true);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(location.href);
      message = "Link copied to clipboard.";
    } catch {
      window.prompt("Copy this link:", location.href);
      message = "";
    }
    render();
  }

  /* ---------------------------------------------------------- data loading */

  /*
   * The data file is a plain script that sets window.TALENT_DATA, so it loads from disk
   * (file://) as well as from a server. Re-adding the script tag with a cache-buster
   * re-reads it, which is how edits show up without touching the other files.
   */

  function loadData(bust) {
    return new Promise((resolve, reject) => {
      delete window.TALENT_DATA;
      const s = document.createElement("script");
      s.src = bust ? `${DATA_FILE}${DATA_FILE.includes("?") ? "&" : "?"}t=${Date.now()}` : DATA_FILE;
      s.onload = () => {
        s.remove();
        if (window.TALENT_DATA) resolve(window.TALENT_DATA);
        else reject(new Error(`${DATA_FILE} loaded but did not define window.TALENT_DATA. Check it for a syntax error.`));
      };
      s.onerror = () => { s.remove(); reject(new Error(`Couldn't load ${DATA_FILE}. Is it in the same folder as index.html?`)); };
      document.head.append(s);
    });
  }

  function applyData(data) {
    let next;
    try {
      next = normalize(data);
    } catch (err) {
      showError(err.message);
      return false;
    }
    const first = !model;
    model = next;
    currentText = JSON.stringify(data);
    if (first) restoreBuild();
    else state = { ...state, ranks: salvage(state.ranks, state.level) };
    render();
    return true;
  }

  function showError(problem) {
    if (model) { message = problem; render(); return; }
    app.innerHTML = `<section class="loader"><h2>Talent data problem</h2><p>${esc(problem)}</p></section>`;
  }

  // silent = triggered by tab focus; only re-render when the file actually changed.
  async function refreshData(silent) {
    let data;
    try {
      data = await loadData(true);
    } catch (err) {
      if (!silent) showError(err.message);
      return;
    }
    const changed = JSON.stringify(data) !== currentText;
    if (silent && !changed) return;
    if (applyData(data)) {
      message = changed ? "Data file changed - build re-checked against it." : "Data reloaded.";
      render();
    }
  }

  // Editing the data file in another window and coming back should just work.
  window.addEventListener("focus", () => { if (model) refreshData(true); });

  loadData(false).then(applyData, (err) => showError(err.message));
})();
