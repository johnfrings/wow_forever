/* Talent data. Edit this file and reload the page; no other file needs changing. */
window.TALENT_DATA = {
	"class": "Paladin",
	"expansion": "World of Warcraft: Forever",
	"version": "1.60.1",
	"specs": [
		{
			"spec": "Holy",
			"grid": {
				"height": 7,
				"width": 4
			},
			"talents": [
				{
					"id": "1",
					"name": "Improved Holy Strike",
					"position": {
						"row": 1,
						"col": 1
					},
                    "icon": {
						"id": 626003,
						"name": "classicon_paladin"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Reduces the cooldown of your Holy Strike ability by 1 sec."
						},
						{
							"rank": 2,
							"description": "Reduces the cooldown of your Holy Strike ability by 2 sec."
						}
					],
					"prerequisites": []
				},
				{
					"id": "2",
					"name": "Divine strength",
					"position": {
						"row": 1,
						"col": 2
					},
                    "icon": {
						"id": 132154,
						"name": "ability_golemthunderclap"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases your strength by 2%"
						},
						{
							"rank": 2,
							"description": "Increases your strength by 4%"
						},
						{
							"rank": 3,
							"description": "Increases your strength by 6%"
						},
						{
							"rank": 4,
							"description": "Increases your strength by 8%"
						},
						{
							"rank": 5,
							"description": "Increases your strength by 10%"
						}
					],
					"prerequisites": []
				},
				{
					"id": "3",
					"name": "Divine Intellect",
					"position": {
						"row": 1,
						"col": 3
					},
                    "icon": {
						"id": 136090,
						"name": "spell_nature_sleep"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases your intellect by 2%"
						},
						{
							"rank": 2,
							"description": "Increases your intellect by 4%"
						},
						{
							"rank": 3,
							"description": "Increases your intellect by 6%"
						},
						{
							"rank": 4,
							"description": "Increases your intellect by 8%"
						},
						{
							"rank": 5,
							"description": "Increases your intellect by 10%"
						}
					],
					"prerequisites": []
				},
				{
					"id": "4",
					"name": "Healing Light",
					"position": {
						"row": 2,
						"col": 1
					},
					"icon": {
						"id": 135920,
						"name": "spell_holy_holybolt"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases the amount healed by your Holy Light, Flash of Light, and Holy Shock spells by 4%."
						},
						{
							"rank": 2,
							"description": "Increases the amount healed by your Holy Light, Flash of Light, and Holy Shock spells by 8%."
						},
						{
							"rank": 3,
							"description": "Increases the amount healed by your Holy Light, Flash of Light, and Holy Shock spells by 12%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 5
						}
					]
				},
				{
					"id": "5",
					"name": "Spiritual Focus",
					"position": {
						"row": 2,
						"col": 2
					},
					"icon": {
						"id": 135736,
						"name": "spell_arcane_blink"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Gives your Flash of Light, Holy Light, and Light's Vigil spells a 35% chance to not lose casting time when you take damage."
						},
						{
							"rank": 2,
							"description": "Gives your Flash of Light, Holy Light, and Light's Vigil spells a 70% chance to not lose casting time when you take damage."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 5
						}
					]
				},
				{
					"id": "6",
					"name": "Improved Seals",
					"position": {
						"row": 2,
						"col": 3
					},
					"icon": {
						"id": 132325,
						"name": "ability_thunderbolt"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases the damage done by your Seals and Judgements by 5%."
						},
						{
							"rank": 2,
							"description": "Increases the damage done by your Seals and Judgements by 10%."
						},
						{
							"rank": 3,
							"description": "Increases the damage done by your Seals and Judgements by 15%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 5
						}
					]
				},
				{
					"id": "7",
					"name": "Unyielding Faith",
					"position": {
						"row": 2,
						"col": 4
					},
					"icon": {
						"id": 135984,
						"name": "spell_holy_unyieldingfaith"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Reduces the duration of  Fear and Disorient effects on you by 15%."
						},
						{
							"rank": 2,
							"description": "Reduces the duration of  Fear and Disorient effects on you by 30%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 5
						}
					]
				},
				{
					"id": "8",
					"name": "Voice of Truth",
					"position": {
						"row": 3,
						"col": 1
					},
					"icon": {
						"id": 134229,
						"name": "inv_misc_horn_03"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Grants you immunity to Silence and Interrupt effects. Lasts 6 sec."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 10
						},
						{
							"type": "player_level",
							"value": 20
						}
					]
				},
				{
					"id": "9",
					"name": "Reverence",
					"position": {
						"row": 3,
						"col": 2
					},
					"icon": {
						"id": 135895,
						"name": "spell_holy_divineillumination"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Allows 10% of your Mana regeneration to continue while casting."
						},
						{
							"rank": 2,
							"description": "Allows 20% of your Mana regeneration to continue while casting."
						},
						{
							"rank": 3,
							"description": "Allows 30% of your Mana regeneration to continue while casting."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 10
						}
					]
				},
				{
					"id": "10",
					"name": "Purifying Power",
					"position": {
						"row": 3,
						"col": 3
					},
					"icon": {
						"id": 135950,
						"name": "spell_holy_purifyingpower"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Reduces the mana cost of your Cleanse and Purify spells by 10% and reduces the cooldown of your Exorcism and Holy Wrath spells by 17%."
						},
						{
							"rank": 2,
							"description": "Reduces the mana cost of your Cleanse and Purify spells by 20% and reduces the cooldown of your Exorcism and Holy Wrath spells by 33%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 10
						}
					]
				},
				{
					"id": "11",
					"name": "Infusion of Light",
					"position": {
						"row": 4,
						"col": 1
					},
					"icon": {
						"id": 236254,
						"name": "ability_paladin_infusionoflight"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Your Holy Shock and Flash of Light critical hits reduce the cast time of your next Holy Light cast within 15 sec by 0.5 sec."
						},
						{
							"rank": 2,
							"description": "Your Holy Shock and Flash of Light critical hits reduce the cast time of your next Holy Light cast within 15 sec by 1.0 sec."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 15
						}
					]
				},
				{
					"id": "12",
					"name": "Illumination",
					"position": {
						"row": 4,
						"col": 2
					},
					"icon": {
						"id": 135913,
						"name": "spell_holy_greaterheal"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "After getting a critical effect from your Flash of Light, Holy Light, Light's Vigil, or Holy Shock heal spell you have a 20% chance to gain Mana equal to 10% of the base cost of the spell."
						},
						{
							"rank": 2,
							"description": "After getting a critical effect from your Flash of Light, Holy Light, Light's Vigil, or Holy Shock heal spell you have a 40% chance to gain Mana equal to 20% of the base cost of the spell."
						},
                        {
							"rank": 3,
							"description": "After getting a critical effect from your Flash of Light, Holy Light, Light's Vigil, or Holy Shock heal spell you have a 60% chance to gain Mana equal to 30% of the base cost of the spell."
						},
                        {
							"rank": 4,
							"description": "After getting a critical effect from your Flash of Light, Holy Light, Light's Vigil, or Holy Shock heal spell you have an 80% chance to gain Mana equal to 40% of the base cost of the spell."
						},
                        {
							"rank": 5,
							"description": "After getting a critical effect from your Flash of Light, Holy Light, Light's Vigil, or Holy Shock heal spell you have a 100% chance to gain Mana equal to 50% of the base cost of the spell."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 15
						},
                        {
							"type": "talent",
							"value": "9"
						}
					]
				},
                {
					"id": "13",
					"name": "Divine Favor",
					"position": {
						"row": 4,
						"col": 3
					},
					"icon": {
						"id": 135915,
						"name": "spell_holy_heal"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 15
						}
					]
				},
                {
					"id": "14",
					"name": "Divine Precision",
					"position": {
						"row": 5,
						"col": 1
					},
					"icon": {
						"id": 135972,
						"name": "spell_holy_searinglight"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Improves your chance to hit with Holy spells by 6%."
						},
                        {
							"rank": 2,
							"description": "Improves your chance to hit with Holy spells by 12%."
						},
                        {
							"rank": 3,
							"description": "Improves your chance to hit with Holy spells by 18%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 20
						},
                        {
                            "type": "talent",
                            "value": "15"
                        }
					]
				},
                {
					"id": "15",
					"name": "Holy Shock",
					"position": {
						"row": 5,
						"col": 2
					},
					"icon": {
						"id": 135972,
						"name": "spell_holy_searinglight"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Blasts the target with Holy energy, causing (42.9% of Spell Power) Holy damage to an enemy, or (42.9% of Spell Power) healing to an ally."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 20
						}
					]
				},
                {
					"id": "16",
					"name": "Consecrated Ground",
					"position": {
						"row": 5,
						"col": 3
					},
					"icon": {
						"id": 135926,
						"name": "spell_holy_innerfire"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Gives your Holy spells 5% increased damage against the first 4 enemies that enter your Consecration."
						},
                        {
							"rank": 2,
							"description": "Gives your Holy spells 10% increased damage against the first 4 enemies that enter your Consecration."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 20
						}
					]
				},
                {
					"id": "17",
					"name": "Holy Power",
					"position": {
						"row": 6,
						"col": 3
					},
					"icon": {
						"id": 135938,
						"name": "spell_holy_power"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases the critical strike chance of your Holy Shock spell by 3%, and all other spells by 1%."
						},
                        {
							"rank": 2,
							"description": "Increases the critical strike chance of your Holy Shock spell by 6%, and all other spells by 2%."
						},
                        {
							"rank": 3,
							"description": "Increases the critical strike chance of your Holy Shock spell by 9%, and all other spells by 3%."
						},
                        {
							"rank": 4,
							"description": "Increases the critical strike chance of your Holy Shock spell by 12%, and all other spells by 4%."
						},
                        {
							"rank": 5,
							"description": "Increases the critical strike chance of your Holy Shock spell by 15%, and all other spells by 5%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 25
						}
					]
				},
                {
					"id": "18",
					"name": "Light's Vigil",
					"position": {
						"row": 7,
						"col": 2
					},
					"icon": {
						"id": 236256,
						"name": "ability_paladin_judgementofthepure"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Applies Light's Vigil to the target for 30 sec. Your next Holy Shock cast on them triggers no cooldown and causes friendly targets to heal their party for (14.3% of Spell Power), or enemy targets to suffer (42.9% of Spell Power) Holy damage and refund 75% of Light's Vigil's Mana cost.  You may only have 1 Light's Vigil active per Paladin, per party."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 30
						},
                        {
                            "type": "talent",
                            "value": "15"
                        },
                        {
							"type": "player_level",
							"value": 40
						}
					]
				}
			]
		},
		{
			"spec": "Protection",
			"grid": {
				"height": 7,
				"width": 4
			},
			"talents": [
				{
					"id": "101",
					"name": "Toughness",
					"position": {
						"row": 1,
						"col": 2
					},
					"icon": {
						"name": "spell_holy_devotion"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases your armor value from items by 2%."
						},
						{
							"rank": 2,
							"description": "Increases your armor value from items by 4%."
						},
						{
							"rank": 3,
							"description": "Increases your armor value from items by 6%."
						},
						{
							"rank": 4,
							"description": "Increases your armor value from items by 8%."
						},
						{
							"rank": 5,
							"description": "Increases your armor value from items by 10%."
						}
					],
					"prerequisites": []
				},
				{
					"id": "102",
					"name": "Redoubt",
					"position": {
						"row": 1,
						"col": 3
					},
					"icon": {
						"name": "ability_defend"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Damaging melee attacks against you have a 10% chance to increase your chance to block by 6%. Lasts 10 sec or 5 blocks."
						},
						{
							"rank": 2,
							"description": "Damaging melee attacks against you have a 10% chance to increase your chance to block by 12%. Lasts 10 sec or 5 blocks."
						},
						{
							"rank": 3,
							"description": "Damaging melee attacks against you have a 10% chance to increase your chance to block by 18%. Lasts 10 sec or 5 blocks."
						},
						{
							"rank": 4,
							"description": "Damaging melee attacks against you have a 10% chance to increase your chance to block by 24%. Lasts 10 sec or 5 blocks."
						},
						{
							"rank": 5,
							"description": "Damaging melee attacks against you have a 10% chance to increase your chance to block by 30%. Lasts 10 sec or 5 blocks."
						}
					],
					"prerequisites": []
				},
				{
					"id": "103",
					"name": "Precision",
					"position": {
						"row": 2,
						"col": 1
					},
					"icon": {
						"name": "ability_rogue_ambush"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Improves your chance to hit by 1%."
						},
						{
							"rank": 2,
							"description": "Improves your chance to hit by 2%."
						},
						{
							"rank": 3,
							"description": "Improves your chance to hit by 3%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 5
						}
					]
				},
				{
					"id": "104",
					"name": "Guardian's Favor",
					"position": {
						"row": 2,
						"col": 2
					},
					"icon": {
						"name": "spell_holy_sealofprotection"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Reduces the cooldown of your Blessing of Protection by 1 min and increases the duration of your Blessing of Freedom by 3 sec."
						},
						{
							"rank": 2,
							"description": "Reduces the cooldown of your Blessing of Protection by 2 min and increases the duration of your Blessing of Freedom by 6 sec."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 5
						}
					]
				},
				{
					"id": "105",
					"name": "Anticipation",
					"position": {
						"row": 2,
						"col": 4
					},
					"icon": {
						"name": "spell_magic_lesserinvisibilty"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases your Defense Skill by 4."
						},
						{
							"rank": 2,
							"description": "Increases your Defense Skill by 8."
						},
						{
							"rank": 3,
							"description": "Increases your Defense Skill by 12."
						},
						{
							"rank": 4,
							"description": "Increases your Defense Skill by 16."
						},
						{
							"rank": 5,
							"description": "Increases your Defense Skill by 20."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 5
						}
					]
				},
				{
					"id": "106",
					"name": "Improved Seal of Fury",
					"position": {
						"row": 3,
						"col": 1
					},
					"icon": {
						"name": "spell_holy_righteousnessaura"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "When Seal of Fury's shield is fully absorbed, restore 0 Mana, increased by 15% per level the attacker is above you, up to 45%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 10
						}
					]
				},
				{
					"id": "107",
					"name": "Improved Righteous Fury",
					"position": {
						"row": 3,
						"col": 2
					},
					"icon": {
						"name": "spell_holy_sealoffury"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "While Righteous Fury is active, all damage taken is reduced by 2%."
						},
						{
							"rank": 2,
							"description": "While Righteous Fury is active, all damage taken is reduced by 4%."
						},
						{
							"rank": 3,
							"description": "While Righteous Fury is active, all damage taken is reduced by 6%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 10
						}
					]
				},
				{
					"id": "108",
					"name": "Shield Specialization",
					"position": {
						"row": 3,
						"col": 3
					},
					"icon": {
						"name": "inv_shield_06"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases the amount of damage absorbed by your shield by 10%, and gives your blocks a 33% chance to restore 6% of your maximum Mana. May only occur once every 3 sec."
						},
						{
							"rank": 2,
							"description": "Increases the amount of damage absorbed by your shield by 20%, and gives your blocks a 66% chance to restore 6% of your maximum Mana. May only occur once every 3 sec."
						},
						{
							"rank": 3,
							"description": "Increases the amount of damage absorbed by your shield by 30%, and gives your blocks a 100% chance to restore 6% of your maximum Mana. May only occur once every 3 sec."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 10
						},
						{
							"type": "talent",
							"value": "102"
						}
					]
				},
				{
					"id": "109",
					"name": "Sacred Duty",
					"position": {
						"row": 3,
						"col": 4
					},
					"icon": {
						"name": "spell_holy_divineintervention"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases your total Stamina by 2% and reduces the cooldown of your Divine Shield, Divine Protection, and Templar's Bulwark spells by 30 sec."
						},
						{
							"rank": 2,
							"description": "Increases your total Stamina by 4% and reduces the cooldown of your Divine Shield, Divine Protection, and Templar's Bulwark spells by 60 sec."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 10
						}
					]
				},
				{
					"id": "110",
					"name": "Swift Judgement",
					"position": {
						"row": 4,
						"col": 1
					},
					"icon": {
						"name": "ability_paladin_judgementred"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Finishes the remaining cooldown on your Judgement ability and reduces the Mana cost of your next Judgement by 100%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 15
						},
						{
							"type": "talent",
							"value": "106"
						}
					]
				},
				{
					"id": "111",
					"name": "One-Handed Weapon Specialization",
					"position": {
						"row": 4,
						"col": 2
					},
					"icon": {
						"name": "inv_sword_20"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases the damage you deal with one-handed melee weapons by 3%."
						},
						{
							"rank": 2,
							"description": "Increases the damage you deal with one-handed melee weapons by 7%."
						},
						{
							"rank": 3,
							"description": "Increases the damage you deal with one-handed melee weapons by 10%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 15
						}
					]
				},
				{
					"id": "112",
					"name": "Improved Hammer of Justice",
					"position": {
						"row": 4,
						"col": 3
					},
					"icon": {
						"name": "spell_holy_sealofmight"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Decreases the cooldown of your Hammer of Justice spell by 5 sec."
						},
						{
							"rank": 2,
							"description": "Decreases the cooldown of your Hammer of Justice spell by 10 sec."
						},
						{
							"rank": 3,
							"description": "Decreases the cooldown of your Hammer of Justice spell by 15 sec."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 15
						}
					]
				},
				{
					"id": "113",
					"name": "Templar's Bulwark",
					"position": {
						"row": 5,
						"col": 2
					},
					"icon": {
						"name": "ability_paladin_shieldofthetemplar"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "When activated, this ability grants you an absorb shield equal to 100% of your maximum health for 8 sec. Applies Forbearance for 1 min. Cannot be cast while Forbearance is active."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 20
						}
					]
				},
				{
					"id": "114",
					"name": "Reckoning",
					"position": {
						"row": 5,
						"col": 3
					},
					"icon": {
						"name": "spell_holy_blessingofstrength"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Gives you a 8% chance to gain an extra attack after Blocking a melee attack and a 20% chance to gain an extra attack after being the victim of a non-periodic critical strike."
						},
						{
							"rank": 2,
							"description": "Gives you a 16% chance to gain an extra attack after Blocking a melee attack and a 40% chance to gain an extra attack after being the victim of a non-periodic critical strike."
						},
						{
							"rank": 3,
							"description": "Gives you a 24% chance to gain an extra attack after Blocking a melee attack and a 60% chance to gain an extra attack after being the victim of a non-periodic critical strike."
						},
						{
							"rank": 4,
							"description": "Gives you a 32% chance to gain an extra attack after Blocking a melee attack and a 80% chance to gain an extra attack after being the victim of a non-periodic critical strike."
						},
						{
							"rank": 5,
							"description": "Gives you a 40% chance to gain an extra attack after Blocking a melee attack and a 100% chance to gain an extra attack after being the victim of a non-periodic critical strike."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 20
						}
					]
				},
				{
					"id": "115",
					"name": "Iron Creed",
					"position": {
						"row": 6,
						"col": 3
					},
					"icon": {
						"name": "spell_holy_improvedresistanceauras"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases the threat generated by your Holy Strike ability 5%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 2% for 6 sec."
						},
						{
							"rank": 2,
							"description": "Increases the threat generated by your Holy Strike ability 10%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 4% for 6 sec."
						},
						{
							"rank": 3,
							"description": "Increases the threat generated by your Holy Strike ability 15%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 6% for 6 sec."
						},
						{
							"rank": 4,
							"description": "Increases the threat generated by your Holy Strike ability 20%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 8% for 6 sec."
						},
						{
							"rank": 5,
							"description": "Increases the threat generated by your Holy Strike ability 25%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 10% for 6 sec."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 25
						}
					]
				},
				{
					"id": "116",
					"name": "Holy Shield",
					"position": {
						"row": 7,
						"col": 2
					},
					"icon": {
						"name": "spell_holy_blessingofprotection"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases chance to block by 20% for 10 sec, and deals 110 Holy damage for each attack blocked while active. Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 30
						},
						{
							"type": "talent",
							"value": "113"
						}
					]
				}
			]
		},
		{
			"spec": "Retribution",
			"grid": {
				"height": 7,
				"width": 4
			},
			"talents": [
				{
					"id": "201",
					"name": "Deflection",
					"position": {
						"row": 1,
						"col": 2
					},
					"icon": {
						"name": "ability_parry"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases your Parry chance by 1%."
						},
						{
							"rank": 2,
							"description": "Increases your Parry chance by 2%."
						},
						{
							"rank": 3,
							"description": "Increases your Parry chance by 3%."
						},
						{
							"rank": 4,
							"description": "Increases your Parry chance by 4%."
						},
						{
							"rank": 5,
							"description": "Increases your Parry chance by 5%."
						}
					],
					"prerequisites": []
				},
				{
					"id": "202",
					"name": "Benediction",
					"position": {
						"row": 1,
						"col": 3
					},
					"icon": {
						"name": "spell_frost_windwalkon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Reduces the Mana cost of all instant cast spells and abilities by 2%."
						},
						{
							"rank": 2,
							"description": "Reduces the Mana cost of all instant cast spells and abilities by 4%."
						},
						{
							"rank": 3,
							"description": "Reduces the Mana cost of all instant cast spells and abilities by 6%."
						},
						{
							"rank": 4,
							"description": "Reduces the Mana cost of all instant cast spells and abilities by 8%."
						},
						{
							"rank": 5,
							"description": "Reduces the Mana cost of all instant cast spells and abilities by 10%."
						}
					],
					"prerequisites": []
				},
				{
					"id": "203",
					"name": "Improved Judgement",
					"position": {
						"row": 2,
						"col": 1
					},
					"icon": {
						"name": "spell_holy_righteousfury"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Decreases the cooldown of your Judgement ability by 1 sec."
						},
						{
							"rank": 2,
							"description": "Decreases the cooldown of your Judgement ability by 2 sec."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 5
						}
					]
				},
				{
					"id": "204",
					"name": "Holy Conduit",
					"position": {
						"row": 2,
						"col": 2
					},
					"icon": {
						"name": "spell_holy_devineaegis"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Reduces the mana cost of your Consecration, Holy Wrath, Exorcism, and Hammer of Wrath spells by 20%."
						},
						{
							"rank": 2,
							"description": "Reduces the mana cost of your Consecration, Holy Wrath, Exorcism, and Hammer of Wrath spells by 40%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 5
						}
					]
				},
				{
					"id": "205",
					"name": "Conviction",
					"position": {
						"row": 2,
						"col": 3
					},
					"icon": {
						"name": "spell_holy_retributionaura"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Improves your chance to get a critical strike with melee attacks by 1%."
						},
						{
							"rank": 2,
							"description": "Improves your chance to get a critical strike with melee attacks by 2%."
						},
						{
							"rank": 3,
							"description": "Improves your chance to get a critical strike with melee attacks by 3%."
						},
						{
							"rank": 4,
							"description": "Improves your chance to get a critical strike with melee attacks by 4%."
						},
						{
							"rank": 5,
							"description": "Improves your chance to get a critical strike with melee attacks by 5%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 5
						}
					]
				},
				{
					"id": "206",
					"name": "Vindication",
					"position": {
						"row": 3,
						"col": 1
					},
					"icon": {
						"name": "spell_holy_vindication"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Gives your damaging melee attacks a chance to reduce the target's Attack Power by (1 /- 3 * - 204), and increase your Attack Power by 1% for 30 sec."
						},
						{
							"rank": 2,
							"description": "Gives your damaging melee attacks a chance to reduce the target's Attack Power by (2 /- 3 * - 204), and increase your Attack Power by 2% for 30 sec."
						},
						{
							"rank": 3,
							"description": "Gives your damaging melee attacks a chance to reduce the target's Attack Power by (3 /- 3 * - 204), and increase your Attack Power by 3% for 30 sec."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 10
						}
					]
				},
				{
					"id": "207",
					"name": "Sanctified Judgement",
					"position": {
						"row": 3,
						"col": 2
					},
					"icon": {
						"name": "ability_paladin_judgementblue"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Gives your Judgement ability a 33% chance to return 20% of the Mana cost of the judged seal."
						},
						{
							"rank": 2,
							"description": "Gives your Judgement ability a 66% chance to return 40% of the Mana cost of the judged seal."
						},
						{
							"rank": 3,
							"description": "Gives your Judgement ability a 100% chance to return 60% of the Mana cost of the judged seal."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 10
						}
					]
				},
				{
					"id": "208",
					"name": "Seal of Command",
					"position": {
						"row": 3,
						"col": 3
					},
					"icon": {
						"name": "ability_warrior_innerrage"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage. Only one Seal can be active on the Paladin at any one time. Lasts 30 sec. Unleashing this Seal's energy will judge an enemy, instantly causing (42.9% of Spell Power) Holy damage, (42.9% of Spell Power) if the target is stunned or incapacitated."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 10
						}
					]
				},
				{
					"id": "209",
					"name": "Pursuit of Justice",
					"position": {
						"row": 3,
						"col": 4
					},
					"icon": {
						"name": "spell_holy_persuitofjustice"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases movement speed and mounted movement speed by 8%. This does not stack with other movement speed increasing effects."
						},
						{
							"rank": 2,
							"description": "Increases movement speed and mounted movement speed by 15%. This does not stack with other movement speed increasing effects."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 10
						}
					]
				},
				{
					"id": "210",
					"name": "Eye for an Eye",
					"position": {
						"row": 4,
						"col": 1
					},
					"icon": {
						"name": "spell_holy_eyeforaneye"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "All critical strikes against you cause 5% of the damage taken to the attacker as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health."
						},
						{
							"rank": 2,
							"description": "All critical strikes against you cause 10% of the damage taken to the attacker as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 15
						}
					]
				},
				{
					"id": "211",
					"name": "Sacred Arbiter",
					"position": {
						"row": 4,
						"col": 3
					},
					"icon": {
						"name": "inv_sword_08"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases the damage of your Holy Strike ability by 10% and causes it to refresh all Judgement effects on the target."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 15
						}
					]
				},
				{
					"id": "212",
					"name": "Crusade",
					"position": {
						"row": 4,
						"col": 4
					},
					"icon": {
						"name": "spell_holy_crusade"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases all damage dealt by 1%. Increased by an additional 1% against Demon and Undead targets."
						},
						{
							"rank": 2,
							"description": "Increases all damage dealt by 2%. Increased by an additional 2% against Demon and Undead targets."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 15
						}
					]
				},
				{
					"id": "213",
					"name": "Two-Handed Weapon Specialization",
					"position": {
						"row": 5,
						"col": 1
					},
					"icon": {
						"name": "inv_hammer_04"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases the damage you deal with two-handed melee weapons by 3%."
						},
						{
							"rank": 2,
							"description": "Increases the damage you deal with two-handed melee weapons by 6%."
						},
						{
							"rank": 3,
							"description": "Increases the damage you deal with two-handed melee weapons by 9%."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 20
						}
					]
				},
				{
					"id": "214",
					"name": "Vengeance",
					"position": {
						"row": 5,
						"col": 2
					},
					"icon": {
						"name": "ability_racial_avatar"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases your Physical and Holy damage dealt by 1% for 30 sec after landing a critical strike. Stacks up to 5 times."
						},
						{
							"rank": 2,
							"description": "Increases your Physical and Holy damage dealt by 2% for 30 sec after landing a critical strike. Stacks up to 5 times."
						},
						{
							"rank": 3,
							"description": "Increases your Physical and Holy damage dealt by 3% for 30 sec after landing a critical strike. Stacks up to 5 times."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 20
						},
						{
							"type": "talent",
							"value": "207"
						}
					]
				},
				{
					"id": "215",
					"name": "Repentance",
					"position": {
						"row": 5,
						"col": 3
					},
					"icon": {
						"name": "spell_holy_prayerofhealing"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec. Any damage caused will awaken the target. Only works against Humanoids."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 20
						}
					]
				},
				{
					"id": "216",
					"name": "Champion of the Light",
					"position": {
						"row": 6,
						"col": 2
					},
					"icon": {
						"name": "ability_paladin_enlightenedjudgements"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Increases your spell damage and healing by up to 33% of your Intellect."
						},
						{
							"rank": 2,
							"description": "Increases your spell damage and healing by up to 66% of your Intellect."
						},
						{
							"rank": 3,
							"description": "Increases your spell damage and healing by up to 100% of your Intellect."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 25
						}
					]
				},
				{
					"id": "217",
					"name": "Instrument of Law",
					"position": {
						"row": 6,
						"col": 3
					},
					"icon": {
						"name": "spell_holy_divinepurpose"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Reduces the cast time of your Hammer of Wrath by 0.5 sec, and reduces all threat you generate by 10% while Righteous Fury is not active."
						},
						{
							"rank": 2,
							"description": "Reduces the cast time of your Hammer of Wrath by 1.0 sec, and reduces all threat you generate by 20% while Righteous Fury is not active."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 25
						}
					]
				},
				{
					"id": "218",
					"name": "Twist of Light",
					"position": {
						"row": 7,
						"col": 2
					},
					"icon": {
						"name": "spell_holy_blessedresillience"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "When you replace your Seal of Command, Seal of Righteousness, Seal of Fury, or Seal of Justice with a different Seal, gain an Echo. Your next melee attack applies the replaced Seal's effects, consuming the Echo."
						}
					],
					"prerequisites": [
						{
							"type": "talent_points_in_spec",
							"value": 30
						}
					]
				}
			]
		}
	]
};
