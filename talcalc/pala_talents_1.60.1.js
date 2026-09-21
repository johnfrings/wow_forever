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
						"id": 132325,
						"name": "ability_thunderbolt"
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
							"value": 20
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
							"value": 20
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
					"name": "Dummy",
					"position": {
						"row": 1,
						"col": 2
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "102",
					"name": "Dummy",
					"position": {
						"row": 1,
						"col": 3
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "103",
					"name": "Dummy",
					"position": {
						"row": 2,
						"col": 1
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "104",
					"name": "Dummy",
					"position": {
						"row": 2,
						"col": 2
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "105",
					"name": "Dummy",
					"position": {
						"row": 2,
						"col": 4
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "106",
					"name": "Dummy",
					"position": {
						"row": 3,
						"col": 1
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "107",
					"name": "Dummy",
					"position": {
						"row": 3,
						"col": 2
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "108",
					"name": "Dummy",
					"position": {
						"row": 3,
						"col": 3
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
                    "id": "109",
                    "name": "Dummy",
                    "position": {
                        "row": 3,
                        "col": 4
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "110",
                    "name": "Dummy",
                    "position": {
                        "row": 4,
                        "col": 1
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "111",
                    "name": "Dummy",
                    "position": {
                        "row": 4,
                        "col": 2
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "112",
                    "name": "Dummy",
                    "position": {
                        "row": 4,
                        "col": 3
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "113",
                    "name": "Dummy",
                    "position": {
                        "row": 5,
                        "col": 2
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "114",
                    "name": "Dummy",
                    "position": {
                        "row": 5,
                        "col": 3
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "115",
                    "name": "Dummy",
                    "position": {
                        "row": 6,
                        "col": 3
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "116",
                    "name": "Dummy",
                    "position": {
                        "row": 7,
                        "col": 2
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
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
					"name": "Dummy",
					"position": {
						"row": 1,
						"col": 2
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "202",
					"name": "Dummy",
					"position": {
						"row": 1,
						"col": 3
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "203",
					"name": "Dummy",
					"position": {
						"row": 2,
						"col": 1
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "204",
					"name": "Dummy",
					"position": {
						"row": 2,
						"col": 2
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "205",
					"name": "Dummy",
					"position": {
						"row": 2,
						"col": 3
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "206",
					"name": "Dummy",
					"position": {
						"row": 3,
						"col": 1
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "207",
					"name": "Dummy",
					"position": {
						"row": 3,
						"col": 2
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
					"id": "208",
					"name": "Dummy",
					"position": {
						"row": 3,
						"col": 3
					},
					"icon": {
						"id": 1,
						"name": "dummy_icon"
					},
					"ranks": [
						{
							"rank": 1,
							"description": "Dummy"
						}
					],
					"prerequisites": []
				},
                {
                    "id": "209",
                    "name": "Dummy",
                    "position": {
                        "row": 3,
                        "col": 4
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "210",
                    "name": "Dummy",
                    "position": {
                        "row": 4,
                        "col": 1
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "211",
                    "name": "Dummy",
                    "position": {
                        "row": 4,
                        "col": 3
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "212",
                    "name": "Dummy",
                    "position": {
                        "row": 4,
                        "col": 4
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "213",
                    "name": "Dummy",
                    "position": {
                        "row": 5,
                        "col": 1
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "214",
                    "name": "Dummy",
                    "position": {
                        "row": 5,
                        "col": 2
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "215",
                    "name": "Dummy",
                    "position": {
                        "row": 5,
                        "col": 3
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "216",
                    "name": "Dummy",
                    "position": {
                        "row": 6,
                        "col": 2
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "217",
                    "name": "Dummy",
                    "position": {
                        "row": 6,
                        "col": 3
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                },
                {
                    "id": "218",
                    "name": "Dummy",
                    "position": {
                        "row": 7,
                        "col": 2
                    },
                    "icon": {
                        "id": 1,
                        "name": "dummy_icon"
                    },
                    "ranks": [
                        {
                            "rank": 1,
                            "description": "Dummy"
                        }
                    ],
                    "prerequisites": []
                }
			]
		}
	]
};
