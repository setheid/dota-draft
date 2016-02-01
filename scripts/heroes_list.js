var heroes = {};

heroes.list = [
  {
    name: 'antimage',
    id: 1,
    localized_name: 'Anti-Mage',
    hero_class: 'agility'
  },
  {
    name: 'axe',
    id: 2,
    localized_name: 'Axe',
    hero_class: 'strength'
  },
  {
    name: 'bane',
    id: 3,
    localized_name: 'Bane',
    hero_class: 'intelligence'
  },
  {
    name: 'bloodseeker',
    id: 4,
    localized_name: 'Bloodseeker',
    hero_class: 'agility'
  },
  {
    name: 'crystal_maiden',
    id: 5,
    localized_name: 'Crystal Maiden',
    hero_class: 'intelligence'
  },
  {
    name: 'drow_ranger',
    id: 6,
    localized_name: 'Drow Ranger',
    hero_class: 'agility'
  },
  {
    name: 'earthshaker',
    id: 7,
    localized_name: 'Earthshaker',
    hero_class: 'strength'
  },
  {
    name: 'juggernaut',
    id: 8,
    localized_name: 'Juggernaut',
    hero_class: 'agility'
  },
  {
    name: 'mirana',
    id: 9,
    localized_name: 'Mirana',
    hero_class: 'agility'
  },
  {
    name: 'nevermore',
    id: 11,
    localized_name: 'Shadow Fiend',
    hero_class: 'agility'
  },
  {
    name: 'morphling',
    id: 10,
    localized_name: 'Morphling',
    hero_class: 'agility'
  },
  {
    name: 'phantom_lancer',
    id: 12,
    localized_name: 'Phantom Lancer',
    hero_class: 'agility'
  },
  {
    name: 'puck',
    id: 13,
    localized_name: 'Puck',
    hero_class: 'intelligence'
  },
  {
    name: 'pudge',
    id: 14,
    localized_name: 'Pudge',
    hero_class: 'strength'
  },
  {
    name: 'razor',
    id: 15,
    localized_name: 'Razor',
    hero_class: 'agility'
  },
  {
    name: 'sand_king',
    id: 16,
    localized_name: 'Sand King',
    hero_class: 'strength'
  },
  {
    name: 'storm_spirit',
    id: 17,
    localized_name: 'Storm Spirit',
    hero_class: 'intelligence'
  },
  {
    name: 'sven',
    id: 18,
    localized_name: 'Sven',
    hero_class: 'strength'
  },
  {
    name: 'tiny',
    id: 19,
    localized_name: 'Tiny',
    hero_class: 'strength'
  },
  {
    name: 'vengefulspirit',
    id: 20,
    localized_name: 'Vengeful Spirit',
    hero_class: 'agility'
  },
  {
    name: 'windrunner',
    id: 21,
    localized_name: 'Windranger',
    hero_class: 'intelligence'
  },
  {
    name: 'zuus',
    id: 22,
    localized_name: 'Zeus',
    hero_class: 'intelligence'
  },
  {
    name: 'kunkka',
    id: 23,
    localized_name: 'Kunkka',
    hero_class: 'strength'
  },
  {
    name: 'lina',
    id: 25,
    localized_name: 'Lina',
    hero_class: 'intelligence'
  },
  {
    name: 'lich',
    id: 31,
    localized_name: 'Lich',
    hero_class: 'intelligence'
  },
  {
    name: 'lion',
    id: 26,
    localized_name: 'Lion',
    hero_class: 'intelligence'
  },
  {
    name: 'shadow_shaman',
    id: 27,
    localized_name: 'Shadow Shaman',
    hero_class: 'intelligence'
  },
  {
    name: 'slardar',
    id: 28,
    localized_name: 'Slardar',
    hero_class: 'strength'
  },
  {
    name: 'tidehunter',
    id: 29,
    localized_name: 'Tidehunter',
    hero_class: 'strength'
  },
  {
    name: 'witch_doctor',
    id: 30,
    localized_name: 'Witch Doctor',
    hero_class: 'intelligence'
  },
  {
    name: 'riki',
    id: 32,
    localized_name: 'Riki',
    hero_class: 'agility'
  },
  {
    name: 'enigma',
    id: 33,
    localized_name: 'Enigma',
    hero_class: 'intelligence'
  },
  {
    name: 'tinker',
    id: 34,
    localized_name: 'Tinker',
    hero_class: 'intelligence'
  },
  {
    name: 'sniper',
    id: 35,
    localized_name: 'Sniper',
    hero_class: 'agility'
  },
  {
    name: 'necrolyte',
    id: 36,
    localized_name: 'Necrophos',
    hero_class: 'intelligence'
  },
  {
    name: 'warlock',
    id: 37,
    localized_name: 'Warlock',
    hero_class: 'intelligence'
  },
  {
    name: 'beastmaster',
    id: 38,
    localized_name: 'Beastmaster',
    hero_class: 'strength'
  },
  {
    name: 'queenofpain',
    id: 39,
    localized_name: 'Queen of Pain',
    hero_class: 'intelligence'
  },
  {
    name: 'venomancer',
    id: 40,
    localized_name: 'Venomancer',
    hero_class: 'agility'
  },
  {
    name: 'faceless_void',
    id: 41,
    localized_name: 'Faceless Void',
    hero_class: 'agility'
  },
  {
    name: 'skeleton_king',
    id: 42,
    localized_name: 'Wraith King',
    hero_class: 'strength'
  },
  {
    name: 'death_prophet',
    id: 43,
    localized_name: 'Death Prophet',
    hero_class: 'intelligence'
  },
  {
    name: 'phantom_assassin',
    id: 44,
    localized_name: 'Phantom Assassin',
    hero_class: 'agility'
  },
  {
    name: 'pugna',
    id: 45,
    localized_name: 'Pugna',
    hero_class: 'intelligence'
  },
  {
    name: 'templar_assassin',
    id: 46,
    localized_name: 'Templar Assassin',
    hero_class: 'agility'
  },
  {
    name: 'viper',
    id: 47,
    localized_name: 'Viper',
    hero_class: 'agility'
  },
  {
    name: 'luna',
    id: 48,
    localized_name: 'Luna',
    hero_class: 'agility'
  },
  {
    name: 'dragon_knight',
    id: 49,
    localized_name: 'Dragon Knight',
    hero_class: 'strength'
  },
  {
    name: 'dazzle',
    id: 50,
    localized_name: 'Dazzle',
    hero_class: 'intelligence'
  },
  {
    name: 'rattletrap',
    id: 51,
    localized_name: 'Clockwerk',
    hero_class: 'strength'
  },
  {
    name: 'leshrac',
    id: 52,
    localized_name: 'Leshrac',
    hero_class: 'intelligence'
  },
  {
    name: 'furion',
    id: 53,
    localized_name: 'Nature\'s Prophet',
    hero_class: 'intelligence'
  },
  {
    name: 'life_stealer',
    id: 54,
    localized_name: 'Lifestealer',
    hero_class: 'strength'
  },
  {
    name: 'dark_seer',
    id: 55,
    localized_name: 'Dark Seer',
    hero_class: 'intelligence'
  },
  {
    name: 'clinkz',
    id: 56,
    localized_name: 'Clinkz',
    hero_class: 'agility'
  },
  {
    name: 'omniknight',
    id: 57,
    localized_name: 'Omniknight',
    hero_class: 'strength'
  },
  {
    name: 'enchantress',
    id: 58,
    localized_name: 'Enchantress',
    hero_class: 'intelligence'
  },
  {
    name: 'huskar',
    id: 59,
    localized_name: 'Huskar',
    hero_class: 'strength'
  },
  {
    name: 'night_stalker',
    id: 60,
    localized_name: 'Night Stalker',
    hero_class: 'strength'
  },
  {
    name: 'broodmother',
    id: 61,
    localized_name: 'Broodmother',
    hero_class: 'agility'
  },
  {
    name: 'bounty_hunter',
    id: 62,
    localized_name: 'Bounty Hunter',
    hero_class: 'agility'
  },
  {
    name: 'weaver',
    id: 63,
    localized_name: 'Weaver',
    hero_class: 'agility'
  },
  {
    name: 'jakiro',
    id: 64,
    localized_name: 'Jakiro',
    hero_class: 'intelligence'
  },
  {
    name: 'batrider',
    id: 65,
    localized_name: 'Batrider',
    hero_class: 'intelligence'
  },
  {
    name: 'chen',
    id: 66,
    localized_name: 'Chen',
    hero_class: 'intelligence'
  },
  {
    name: 'spectre',
    id: 67,
    localized_name: 'Spectre',
    hero_class: 'agility'
  },
  {
    name: 'doom_bringer',
    id: 69,
    localized_name: 'Doom',
    hero_class: 'strength'
  },
  {
    name: 'ancient_apparition',
    id: 68,
    localized_name: 'Ancient Apparition',
    hero_class: 'intelligence'
  },
  {
    name: 'ursa',
    id: 70,
    localized_name: 'Ursa',
    hero_class: 'agility'
  },
  {
    name: 'spirit_breaker',
    id: 71,
    localized_name: 'Spirit Breaker',
    hero_class: 'strength'
  },
  {
    name: 'gyrocopter',
    id: 72,
    localized_name: 'Gyrocopter',
    hero_class: 'agility'
  },
  {
    name: 'alchemist',
    id: 73,
    localized_name: 'Alchemist',
    hero_class: 'strength'
  },
  {
    name: 'invoker',
    id: 74,
    localized_name: 'Invoker',
    hero_class: 'intelligence'
  },
  {
    name: 'silencer',
    id: 75,
    localized_name: 'Silencer',
    hero_class: 'intelligence'
  },
  {
    name: 'obsidian_destroyer',
    id: 76,
    localized_name: 'Outworld Devourer',
    hero_class: 'intelligence'
  },
  {
    name: 'lycan',
    id: 77,
    localized_name: 'Lycan',
    hero_class: 'strength'
  },
  {
    name: 'brewmaster',
    id: 78,
    localized_name: 'Brewmaster',
    hero_class: 'strength'
  },
  {
    name: 'shadow_demon',
    id: 79,
    localized_name: 'Shadow Demon',
    hero_class: 'intelligence'
  },
  {
    name: 'lone_druid',
    id: 80,
    localized_name: 'Lone Druid',
    hero_class: 'strength'
  },
  {
    name: 'chaos_knight',
    id: 81,
    localized_name: 'Chaos Knight',
    hero_class: 'strength'
  },
  {
    name: 'meepo',
    id: 82,
    localized_name: 'Meepo',
    hero_class: 'strength'
  },
  {
    name: 'treant',
    id: 83,
    localized_name: 'Treant Protector',
    hero_class: 'strength'
  },
  {
    name: 'ogre_magi',
    id: 84,
    localized_name: 'Ogre Magi',
    hero_class: 'intelligence'
  },
  {
    name: 'undying',
    id: 85,
    localized_name: 'Undying',
    hero_class: 'strength'
  },
  {
    name: 'rubick',
    id: 86,
    localized_name: 'Rubick',
    hero_class: 'intelligence'
  },
  {
    name: 'disruptor',
    id: 87,
    localized_name: 'Disruptor',
    hero_class: 'intelligence'
  },
  {
    name: 'nyx_assassin',
    id: 88,
    localized_name: 'Nyx Assassin',
    hero_class: 'agility'
  },
  {
    name: 'naga_siren',
    id: 89,
    localized_name: 'Naga Siren',
    hero_class: 'agility'
  },
  {
    name: 'keeper_of_the_light',
    id: 90,
    localized_name: 'Keeper of the Light',
    hero_class: 'intelligence'
  },
  {
    name: 'wisp',
    id: 91,
    localized_name: 'Wisp',
    hero_class: 'strength'
  },
  {
    name: 'visage',
    id: 92,
    localized_name: 'Visage',
    hero_class: 'intelligence'
  },
  {
    name: 'slark',
    id: 93,
    localized_name: 'Slark',
    hero_class: 'agility'
  },
  {
    name: 'medusa',
    id: 94,
    localized_name: 'Medusa',
    hero_class: 'agility'
  },
  {
    name: 'troll_warlord',
    id: 95,
    localized_name: 'Troll Warlord',
    hero_class: 'agility'
  },
  {
    name: 'centaur',
    id: 96,
    localized_name: 'Centaur Warrunner',
    hero_class: 'strength'
  },
  {
    name: 'magnataur',
    id: 97,
    localized_name: 'Magnus',
    hero_class: 'strength'
  },
  {
    name: 'shredder',
    id: 98,
    localized_name: 'Timbersaw',
    hero_class: 'strength'
  },
  {
    name: 'bristleback',
    id: 99,
    localized_name: 'Bristleback',
    hero_class: 'strength'
  },
  {
    name: 'tusk',
    id: 100,
    localized_name: 'Tusk',
    hero_class: 'strength'
  },
  {
    name: 'skywrath_mage',
    id: 101,
    localized_name: 'Skywrath Mage',
    hero_class: 'intelligence'
  },
  {
    name: 'abaddon',
    id: 102,
    localized_name: 'Abaddon',
    hero_class: 'strength'
  },
  {
    name: 'elder_titan',
    id: 103,
    localized_name: 'Elder Titan',
    hero_class: 'strength'
  },
  {
    name: 'legion_commander',
    id: 104,
    localized_name: 'Legion Commander',
    hero_class: 'strength'
  },
  {
    name: 'ember_spirit',
    id: 106,
    localized_name: 'Ember Spirit',
    hero_class: 'agility'
  },
  {
    name: 'earth_spirit',
    id: 107,
    localized_name: 'Earth Spirit',
    hero_class: 'strength'
  },
  // {
  //   name: 'abyssal_underlord',
  //   id: 108,
  //   localized_name: 'Abyssal Underlord',
  //   hero_class: 'strength'
  // },
  {
    name: 'terrorblade',
    id: 109,
    localized_name: 'Terrorblade',
    hero_class: 'agility'
  },
  {
    name: 'phoenix',
    id: 110,
    localized_name: 'Phoenix',
    hero_class: 'strength'
  },
  {
    name: 'techies',
    id: 105,
    localized_name: 'Techies',
    hero_class: 'intelligence'
  },
  {
    name: 'oracle',
    id: 111,
    localized_name: 'Oracle',
    hero_class: 'intelligence'
  },
  {
    name: 'winter_wyvern',
    id: 112,
    localized_name: 'Winter Wyvern',
    hero_class: 'intelligence'
  },
  {
    name: 'arc_warden',
    id: 113,
    localized_name: 'Arc Warden',
    hero_class: 'agility'
  }
];
