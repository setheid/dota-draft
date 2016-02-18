var heroes = {};

heroes.list = [
  {
    name: 'antimage',
    id: 1,
    localized_name: 'Anti-Mage',
    hero_class: 'agility',
    weak_against: ['slardar', 'bloodseeker', 'phantom_assassin', 'legion_commander', 'spirit_breaker', 'lion', 'clinkz', 'troll_warlord'],
    synergies: ['beastmaster', 'batrider', 'shadow_demon', 'chen', 'oracle', 'visage', 'brewmaster', 'keeper_of_the_light']
  },
  {
    name: 'axe',
    id: 2,
    localized_name: 'Axe',
    hero_class: 'strength',
    weak_against: ['viper', 'venomancer', 'obsidian_destroyer', 'necrolyte', 'shredder', 'gyrocopter', 'ancient_apparition', 'zuus'],
    synergies: ['omniknight', 'meepo', 'broodmother', 'dazzle', 'lycan', 'huskar']
  },
  {
    name: 'bane',
    id: 3,
    localized_name: 'Bane',
    hero_class: 'intelligence',
    weak_against: ['chaos_knight', 'tidehunter', 'phantom_lancer', 'meepo', 'death_prophet', 'undying', 'sand_king'],
    synergies: ['antimage', 'shredder', 'lone_druid', 'medusa', 'meepo']
  },
  {
    name: 'bloodseeker',
    id: 4,
    localized_name: 'Bloodseeker',
    hero_class: 'agility',
    weak_against: ['lone_druid', 'skeleton_king', 'life_stealer', 'morphling', 'enchantress', 'ogre_magi', 'shadow_shaman'],
    synergies: ['bristleback', 'skeleton_king', 'meepo', 'broodmother', 'omniknight']
  },
  {
    name: 'crystal_maiden',
    id: 5,
    localized_name: 'Crystal Maiden',
    hero_class: 'intelligence',
    weak_against: ['zuus', 'visage', 'silencer', 'phoenix', 'magnataur', 'witch_doctor', 'elder_titan'],
    synergies: ['clinkz', 'omniknight', 'medusa', 'sven', 'ursa', 'chaos_knight']
  },
  {
    name: 'drow_ranger',
    id: 6,
    localized_name: 'Drow Ranger',
    hero_class: 'agility',
    weak_against: ['winter_wyvern', 'phantom_assassin', 'wisp', 'broodmother', 'naga_siren', 'bounty_hunter', 'phantom_lancer', 'slark', 'brewmaster', 'centaur'],
    synergies: ['huskar', 'enchantress', 'templar_assassin', 'vengefulspirit', 'weaver', 'gyrocopter', 'windrunner', 'visage', 'luna', 'medusa']
  },
  {
    name: 'earthshaker',
    id: 7,
    localized_name: 'Earthshaker',
    hero_class: 'strength',
    weak_against: ['zuus', 'alchemist', 'rattletrap', 'spectre', 'life_stealer', 'silencer', 'elder_titan', 'sniper', 'venomancer'],
    synergies: ['necrolyte', 'clinkz', 'chen', 'terrorblade', 'alchemist', 'lycan', 'viper']
  },
  {
    name: 'juggernaut',
    id: 8,
    localized_name: 'Juggernaut',
    hero_class: 'agility',
    weak_against: ['clinkz', 'night_stalker', 'ursa', 'visage', 'axe', 'drow_ranger', 'templar_assassin', 'troll_warlord', 'weaver', 'sniper'],
    synergies: ['magnataur', 'earth_spirit', 'nyx_assassin', 'batrider', 'rattletrap', 'sand_king', 'rubick']
  },
  {
    name: 'mirana',
    id: 9,
    localized_name: 'Mirana',
    hero_class: 'agility',
    weak_against: ['lycan', 'zuus', 'abaddon', 'broodmother', 'visage', 'terrorblade', 'bounty_hunter'],
    synergies: ['drow_ranger', 'zuus', 'alchemist', 'death_prophet', 'warlock']
  },
  {
    name: 'nevermore',
    id: 11,
    localized_name: 'Shadow Fiend',
    hero_class: 'agility',
    weak_against: ['templar_assassin', 'techies', 'tinker', 'bounty_hunter', 'zuus', 'spirit_breaker'],
    synergies: ['spirit_breaker', 'tidehunter', 'chen', 'elder_titan', 'slardar']
  },
  {
    name: 'morphling',
    id: 10,
    localized_name: 'Morphling',
    hero_class: 'agility',
    weak_against: ['lion', 'obsidian_destroyer', 'antimage', 'zuus', 'silencer', 'ancient_apparition', 'skywrath_mage'],
    synergies: ['earth_spirit', 'bounty_hunter', 'drow_ranger', 'elder_titan', 'phoenix', 'lich', 'zuus']
  },
  {
    name: 'phantom_lancer',
    id: 12,
    localized_name: 'Phantom Lancer',
    hero_class: 'agility',
    weak_against: ['leshrac', 'axe', 'ember_spirit', 'earthshaker', 'sand_king', 'meepo', 'shredder', 'dark_seer'],
    synergies: ['keeper_of_the_light', 'dazzle', 'lich', 'witch_doctor', 'skywrath_mage', 'treant']
  },
  {
    name: 'puck',
    id: 13,
    localized_name: 'Puck',
    hero_class: 'intelligence',
    weak_against: ['silencer', 'spectre', 'skeleton_king', 'techies', 'templar_assassin', 'lone_druid', 'riki'],
    synergies: ['spectre', 'life_stealer', 'ursa']
  },
  {
    name: 'pudge',
    id: 14,
    localized_name: 'Pudge',
    hero_class: 'strength',
    weak_against: ['lycan', 'life_stealer', 'chaos_knight', 'ursa', 'broodmother', 'abaddon', 'chen', 'skeleton_king', 'weaver', 'undying', 'visage'],
    synergies: ['medusa', 'venomancer', 'jakiro', 'gyrocopter', 'keeper_of_the_light', 'pugna', 'omniknight', 'sniper']
  },
  {
    name: 'razor',
    id: 15,
    localized_name: 'Razor',
    hero_class: 'agility',
    weak_against: ['meepo', 'brewmaster', 'lich', 'sand_king', 'nevermore', 'enigma', 'elder_titan'],
    synergies: ['brewmaster', 'bloodseeker']
  },
  {
    name: 'sand_king',
    id: 16,
    localized_name: 'Sand King',
    hero_class: 'strength',
    weak_against: ['zuus', 'phoenix', 'disruptor', 'elder_titan', 'silencer', 'earth_spirit', 'spectre', 'juggernaut'],
    synergies: ['juggernaut', 'necrolyte', 'omniknight', 'life_stealer', 'ursa', 'enchantress', 'viper']
  },
  {
    name: 'storm_spirit',
    id: 17,
    localized_name: 'Storm Spirit',
    hero_class: 'intelligence',
    weak_against: ['spirit_breaker', 'antimage', 'silencer', 'lion', 'disruptor', 'medusa', 'nyx_assassin', 'tidehunter', 'skywrath_mage'],
    synergies: ['brewmaster', 'visage', 'chen', 'elder_titan', 'beastmaster', 'ursa', 'wisp', 'drow_ranger']
  },
  {
    name: 'sven',
    id: 18,
    localized_name: 'Sven',
    hero_class: 'strength',
    weak_against: ['medusa', 'enchantress', 'sniper', 'keeper_of_the_light', 'windrunner', 'sand_king', 'rattletrap'],
    synergies: ['magnataur', 'wisp', 'omniknight', 'treant', 'chen', 'dark_seer', 'crystal_maiden']
  },
  {
    name: 'tiny',
    id: 19,
    localized_name: 'Tiny',
    hero_class: 'strength',
    weak_against: ['life_stealer', 'viper', 'undying', 'bristleback', 'enchantress', 'death_prophet', 'batrider'],
    synergies: ['wisp', 'chen', 'meepo', 'brewmaster']
  },
  {
    name: 'vengefulspirit',
    id: 20,
    localized_name: 'Vengeful Spirit',
    hero_class: 'agility',
    weak_against: ['phantom_lancer', 'winter_wyvern', 'naga_siren', 'elder_titan', 'meepo', 'dark_seer'],
    synergies: ['furion', 'witch_doctor', 'luna', 'abaddon', 'drow_ranger', 'beastmaster']
  },
  {
    name: 'windrunner',
    id: 21,
    localized_name: 'Windranger',
    hero_class: 'intelligence',
    weak_against: ['centaur', 'spectre', 'rattletrap', 'zuus', 'axe', 'tinker', 'ogre_magi'],
    synergies: ['drow_ranger', 'techies', 'ursa', 'chen']
  },
  {
    name: 'zuus',
    id: 22,
    localized_name: 'Zeus',
    hero_class: 'intelligence',
    weak_against: ['huskar', 'alchemist', 'life_stealer', 'antimage', 'juggernaut', 'viper', 'skeleton_king'],
    synergies: ['pugna', 'spectre', 'nyx_assassin', 'furion', 'bloodseeker']
  },
  {
    name: 'kunkka',
    id: 23,
    localized_name: 'Kunkka',
    hero_class: 'strength',
    weak_against: ['alchemist', 'phoenix', 'furion', 'life_stealer', 'rubick'],
    synergies: ['skeleton_king', 'ursa', 'lycan', 'juggernaut', 'undying', 'spirit_breaker']
  },
  {
    name: 'lina',
    id: 25,
    localized_name: 'Lina',
    hero_class: 'intelligence',
    weak_against: ['nyx_assassin', 'pugna', 'medusa', 'spectre', 'rubick', 'spirit_breaker'],
    synergies: ['chen', 'meepo']
  },
  {
    name: 'lich',
    id: 31,
    localized_name: 'Lich',
    hero_class: 'intelligence',
    weak_against: ['shadow_demon', 'huskar', 'broodmother', 'brewmaster', 'furion', 'rubick', 'earth_spirit', 'antimage'],
    synergies: ['lycan', 'night_stalker', 'doom_bringer', 'shredder', 'phantom_lancer', 'riki', 'clinkz']
  },
  {
    name: 'lion',
    id: 26,
    localized_name: 'Lion',
    hero_class: 'intelligence',
    weak_against: ['pugna', 'spectre', 'undying', 'razor', 'jakiro', 'medusa', 'winter_wyvern', 'venomancer'],
    synergies: ['meepo', 'terrorblade', 'alchemist', 'drow_ranger', 'antimage', 'lycan', 'ursa']
  },
  {
    name: 'shadow_shaman',
    id: 27,
    localized_name: 'Shadow Shaman',
    hero_class: 'intelligence',
    weak_against: ['chen', 'visage', 'beastmaster', 'meepo', 'spectre', 'oracle', 'winter_wyvern'],
    synergies: ['riki', 'undying', 'death_prophet', 'sniper', 'ursa', 'weaver', 'invoker']
  },
  {
    name: 'slardar',
    id: 28,
    localized_name: 'Slardar',
    hero_class: 'strength',
    weak_against: ['tidehunter', 'venomancer', 'enigma', 'zuus', 'rattletrap', 'omniknight', 'silencer', 'luna'],
    synergies: ['alchemist', 'winter_wyvern', 'lycan', 'tusk', 'terrorblade', 'wisp']
  },
  {
    name: 'tidehunter',
    id: 29,
    localized_name: 'Tidehunter',
    hero_class: 'strength',
    weak_against: ['zuus', 'alchemist', 'abaddon', 'lich', 'medusa', 'necrolyte', 'pugna'],
    synergies: ['clinkz', 'life_stealer', 'riki', 'lycan', 'oracle', 'legion_commander']
  },
  {
    name: 'witch_doctor',
    id: 30,
    localized_name: 'Witch Doctor',
    hero_class: 'intelligence',
    weak_against: ['riki', 'clinkz', 'broodmother', 'chen', 'visage', 'furion'],
    synergies: ['furion', 'abaddon', 'pugna', 'luna', 'vengefulspirit', 'phantom_lancer', 'undying', 'faceless_void']
  },
  {
    name: 'riki',
    id: 32,
    localized_name: 'Riki',
    hero_class: 'agility',
    weak_against: ['broodmother', 'techies', 'bristleback', 'bloodseeker', 'axe', 'phantom_assassin', 'tinker', 'razor'],
    synergies: ['chen', 'dark_seer', 'dazzle', 'meepo', 'jakiro', 'leshrac', 'phoenix']
  },
  {
    name: 'enigma',
    id: 33,
    localized_name: 'Enigma',
    hero_class: 'intelligence',
    weak_against: ['spectre', 'death_prophet', 'silencer', 'rubick', 'sniper', 'antimage', 'furion'],
    synergies: ['beastmaster', 'nyx_assassin', 'leshrac', 'slark', 'night_stalker']
  },
  {
    name: 'tinker',
    id: 34,
    localized_name: 'Tinker',
    hero_class: 'intelligence',
    weak_against: ['batrider', 'treant', 'templar_assassin', 'pudge', 'shadow_demon', 'meepo'],
    synergies: ['broodmother', 'legion_commander', 'slark', 'spectre']
  },
  {
    name: 'sniper',
    id: 35,
    localized_name: 'Sniper',
    hero_class: 'agility',
    weak_against: ['spectre', 'pudge', 'phantom_assassin', 'broodmother', 'slark', 'centaur', 'rattletrap', 'ogre_magi', 'mirana'],
    synergies: ['ogre_magi', 'drow_ranger', 'skeleton_king', 'shadow_shaman']
  },
  {
    name: 'necrolyte',
    id: 36,
    localized_name: 'Necrophos',
    hero_class: 'intelligence',
    weak_against: ['chen', 'wisp', 'pugna', 'drow_ranger', 'visage', 'warlock', 'shadow_demon', 'ancient_apparition'],
    synergies: ['pugna', 'centaur', 'rattletrap', 'riki', 'earthshaker']
  },
  {
    name: 'warlock',
    id: 37,
    localized_name: 'Warlock',
    hero_class: 'intelligence',
    weak_against: ['chen', 'broodmother', 'beastmaster', 'batrider', 'lich'],
    synergies: ['weaver', 'riki', 'beastmaster', 'tusk']
  },
  {
    name: 'beastmaster',
    id: 38,
    localized_name: 'Beastmaster',
    hero_class: 'strength',
    weak_against: ['centaur', 'winter_wyvern', 'faceless_void', 'kunkka', 'morphling', 'dark_seer', 'tidehunter', 'oracle'],
    synergies: ['oracle', 'chen', 'enigma', 'earth_spirit', 'luna', 'faceless_void', 'troll_warlord']
  },
  {
    name: 'queenofpain',
    id: 39,
    localized_name: 'Queen of Pain',
    hero_class: 'intelligence',
    weak_against: ['medusa', 'legion_commander', 'skeleton_king', 'pugna', 'nyx_assassin', 'treant'],
    synergies: ['night_stalker', 'lycan', 'juggernaut', 'spectre']
  },
  {
    name: 'venomancer',
    id: 40,
    localized_name: 'Venomancer',
    hero_class: 'agility',
    weak_against: ['huskar', 'lycan', 'arc_warden', 'tinker', 'furion', 'phoenix'],
    synergies: ['pugna', 'riki', 'undying', 'juggernaut']
  },
  {
    name: 'faceless_void',
    id: 41,
    localized_name: 'Faceless Void',
    hero_class: 'agility',
    weak_against: ['skywrath_mage', 'lion', 'obsidian_destroyer', 'centaur', 'ancient_apparition'],
    synergies: ['visage', 'chen', 'beastmaster', 'troll_warlord', 'oracle', 'ogre_magi', 'witch_doctor', 'skywrath_mage']
  },
  {
    name: 'skeleton_king',
    id: 42,
    localized_name: 'Wraith King',
    hero_class: 'strength',
    weak_against: ['obsidian_destroyer', 'antimage', 'phantom_lancer', 'invoker', 'undying', 'keeper_of_the_light'],
    synergies: ['ancient_apparition', 'techies', 'elder_titan', 'batrider', 'shredder', 'nevermore']
  },
  {
    name: 'death_prophet',
    id: 43,
    localized_name: 'Death Prophet',
    hero_class: 'intelligence',
    weak_against: ['ancient_apparition', 'chen', 'drow_ranger', 'lycan', 'sniper'],
    synergies: ['undying', 'pugna', 'shadow_shaman', 'leshrac']
  },
  {
    name: 'phantom_assassin',
    id: 44,
    localized_name: 'Phantom Assassin',
    hero_class: 'agility',
    weak_against: ['centaur', 'shredder', 'sand_king', 'ogre_magi', 'bristleback', 'lion'],
    synergies: ['techie', 'shadow_demon', 'keeper_of_the_light', 'ancient_apparition']
  },
  {
    name: 'pugna',
    id: 45,
    localized_name: 'Pugna',
    hero_class: 'intelligence',
    weak_against: ['huskar', 'pudge', 'visage', 'chen', 'keeper_of_the_light', 'elder_titan'],
    synergies: ['necrolyte', 'undying', 'witch_doctor', 'dazzle', 'jakiro', 'venomancer', 'zuus']
  },
  {
    name: 'templar_assassin',
    id: 46,
    localized_name: 'Templar Assassin',
    hero_class: 'agility',
    weak_against: ['phantom_lancer', 'batrider', 'dark_seer', 'venomancer', 'jakiro', 'axe'],
    synergies: ['drow_ranger', 'winter_wyvern', 'keeper_of_the_light', 'elder_titan']
  },
  {
    name: 'viper',
    id: 47,
    localized_name: 'Viper',
    hero_class: 'agility',
    weak_against: ['meepo', 'phantom_lancer', 'brewmaster', 'enchantress'],
    synergies: ['drow_ranger', 'treant']
  },
  {
    name: 'luna',
    id: 48,
    localized_name: 'Luna',
    hero_class: 'agility',
    weak_against: ['dark_seer', 'meepo', 'kunkka', 'broodmother'],
    synergies: ['furion', 'vengefulspirit', 'drow_ranger', 'abaddon', 'witch_doctor', 'beastmaster']
  },
  {
    name: 'dragon_knight',
    id: 49,
    localized_name: 'Dragon Knight',
    hero_class: 'strength',
    weak_against: ['obsidian_destroyer', 'enigma', 'jakiro', 'undying', 'razor', 'pugna'],
    synergies: ['wisp', 'drow_ranger', 'elder_titan', 'kunkka', 'dark_seer']
  },
  {
    name: 'dazzle',
    id: 50,
    localized_name: 'Dazzle',
    hero_class: 'intelligence',
    weak_against: ['ancient_apparition', 'chen', 'medusa', 'obsidian_destroyer', 'pugna', 'beastmaster', 'axe'],
    synergies: ['pugna', 'riki', 'obsidian_destroyer', 'huskar', 'gyrocopter', 'phantom_lancer']
  },
  {
    name: 'rattletrap',
    id: 51,
    localized_name: 'Clockwerk',
    hero_class: 'strength',
    weak_against: ['antimage', 'shadow_demon', 'lycan', 'riki', 'ursa', 'juggernaut', 'treant', 'obsidian_destroyer'],
    synergies: ['terrorblade', 'clinkz', 'antimage']
  },
  {
    name: 'leshrac',
    id: 52,
    localized_name: 'Leshrac',
    hero_class: 'intelligence',
    weak_against: ['life_stealer', 'antimage', 'storm_spirit', 'visage', 'oracle'],
    synergies: ['riki', 'enigma', 'storm_spirit']
  },
  {
    name: 'furion',
    id: 53,
    localized_name: 'Nature\'s Prophet',
    hero_class: 'intelligence',
    weak_against: ['spectre', 'spirit_breaker', 'legion_commander', 'antimage', 'phantom_assassin', 'sven', 'ember_spirit'],
    synergies: ['luna', 'vengefulspirit', 'drow_ranger', 'abaddon', 'witch_doctor']
  },
  {
    name: 'life_stealer',
    id: 54,
    localized_name: 'Lifestealer',
    hero_class: 'strength',
    weak_against: ['templar_assassin', 'omniknight', 'troll_warlord', 'weaver', 'broodmother', 'faceless_void'],
    synergies: ['earth_spirit', 'brewmaster', 'elder_titan', 'broodmother', 'visage', 'magnataur']
  },
  {
    name: 'dark_seer',
    id: 55,
    localized_name: 'Dark Seer',
    hero_class: 'intelligence',
    weak_against: ['antimage', 'techies', 'oracle', 'pugna', 'shredder'],
    synergies: ['riki', 'legion_commander', 'spirit_breaker', 'dragon_knight']
  },
  {
    name: 'clinkz',
    id: 56,
    localized_name: 'Clinkz',
    hero_class: 'agility',
    weak_against: ['broodmother', 'phantom_lancer', 'meepo', 'bounty_hunter', 'phantom_assassin', 'slardar', 'chaos_knight'],
    synergies: ['crystal_maiden', 'tidehunter', 'rattletrap', 'ogre_magi', 'earthshaker']
  },
  {
    name: 'omniknight',
    id: 57,
    localized_name: 'Omniknight',
    hero_class: 'strength',
    weak_against: ['obsidian_destroyer', 'oracle', 'medusa', 'dark_seer'],
    synergies: ['sven', 'axe', 'legion_commander', 'spirit_breaker', 'gyrocopter', 'huskar']
  },
  {
    name: 'enchantress',
    id: 58,
    localized_name: 'Enchantress',
    hero_class: 'intelligence',
    weak_against: ['phantom_assassin', 'ogre_magi', 'shadow_demon', 'naga_siren'],
    synergies: ['drow_ranger', 'techies']
  },
  {
    name: 'huskar',
    id: 59,
    localized_name: 'Huskar',
    hero_class: 'strength',
    weak_against: ['broodmother', 'ancient_apparition', 'axe', 'troll_warlord', 'windrunner', 'chaos_knight', 'omniknight', 'enchantress', 'phantom_lancer', 'centaur'],
    synergies: ['meepo', 'drow_ranger', 'broodmother', 'jakiro', 'dazzle', 'brewmaster', 'omniknight']
  },
  {
    name: 'night_stalker',
    id: 60,
    localized_name: 'Night Stalker',
    hero_class: 'strength',
    weak_against: ['meepo', 'treant', 'broodmother', 'dark_seer', 'winter_wyvern', 'jakiro'],
    synergies: ['lich', 'kunkka', 'ancient_apparition', 'enigma']
  },
  {
    name: 'broodmother',
    id: 61,
    localized_name: 'Broodmother',
    hero_class: 'agility',
    weak_against: ['tiny', 'earthshaker', 'slardar', 'axe', 'dark_seer', 'bristleback', 'ember_spirit', 'centaur', 'meepo', 'naga_siren', 'shredder', 'storm_spirit', 'keeper_of_the_light'],
    synergies: ['huskar', 'axe', 'tiny', 'life_stealer', 'bloodseeker', 'tinker', 'troll_warlord']
  },
  {
    name: 'bounty_hunter',
    id: 62,
    localized_name: 'Bounty Hunter',
    hero_class: 'agility',
    weak_against: ['huskar', 'phantom_lancer', 'naga_siren', 'slardar', 'spirit_breaker'],
    synergies: ['alchemist', 'medusa']
  },
  {
    name: 'weaver',
    id: 63,
    localized_name: 'Weaver',
    hero_class: 'agility',
    weak_against: ['faceless_void', 'zuus', 'bloodseeker', 'techies', 'bounty_hunter', 'riki', 'beastmaster', 'chen'],
    synergies: ['drow_ranger', 'warlock']
  },
  {
    name: 'jakiro',
    id: 64,
    localized_name: 'Jakiro',
    hero_class: 'intelligence',
    weak_against: ['leshrac', 'pugna', 'rubick'],
    synergies: ['pugna', 'lycan', 'huskar', 'riki']
  },
  {
    name: 'batrider',
    id: 65,
    localized_name: 'Batrider',
    hero_class: 'intelligence',
    weak_against: ['weaver', 'antimage', 'doom_bringer', 'viper', 'enigma', 'huskar'],
    synergies: ['spectre', 'lone_druid', 'antimage', 'skeleton_king', 'alchemist', 'terrorblade']
  },
  {
    name: 'chen',
    id: 66,
    localized_name: 'Chen',
    hero_class: 'intelligence',
    weak_against: ['naga_siren', 'enigma', 'antimage', 'life_stealer', 'storm_spirit', 'ember_spirit', 'beastmaster', 'faceless_void', 'enchantress'],
    synergies: ['spectre', 'beastmaster', 'faceless_void', 'riki', 'antimage', 'storm_spirit', 'ember_spirit', 'lone_druid']
  },
  {
    name: 'spectre',
    id: 67,
    localized_name: 'Spectre',
    hero_class: 'agility',
    weak_against: ['life_stealer', 'undying', 'treant', 'necrolyte', 'alchemist', 'juggernaut', 'omniknight'],
    synergies: ['earth_spirit', 'batrider', 'chen', 'brewmaster', 'wisp', 'zuus', 'visage']
  },
  {
    name: 'doom_bringer',
    id: 69,
    localized_name: 'Doom',
    hero_class: 'strength',
    weak_against: ['lycan', 'medusa', 'alchemist'],
    synergies: ['lich', 'elder_titan', 'wisp']
  },
  {
    name: 'ancient_apparition',
    id: 68,
    localized_name: 'Ancient Apparition',
    hero_class: 'intelligence',
    weak_against: ['furion', 'arc_warden', 'antimage', 'clinkz', 'weaver'],
    synergies: ['skeleton_king', 'chaos_knight', 'riki', 'slark']
  },
  {
    name: 'ursa',
    id: 70,
    localized_name: 'Ursa',
    hero_class: 'agility',
    weak_against: ['phantom_lancer', 'shadow_demon', 'broodmother', 'brewmaster', 'naga_siren', 'troll_warlord'],
    synergies: ['kunkka']
  },
  {
    name: 'spirit_breaker',
    id: 71,
    localized_name: 'Spirit Breaker',
    hero_class: 'strength',
    weak_against: ['meepo', 'treant', 'elder_titan', 'omniknight'],
    synergies: ['alchemist', 'omniknight', 'furion', 'spectre', 'zuus']
  },
  {
    name: 'gyrocopter',
    id: 72,
    localized_name: 'Gyrocopter',
    hero_class: 'agility',
    weak_against: ['phoenix', 'zuus', 'life_stealer', 'juggernaut'],
    synergies: ['dazzle', 'omniknight', 'drow_ranger']
  },
  {
    name: 'alchemist',
    id: 73,
    localized_name: 'Alchemist',
    hero_class: 'strength',
    weak_against: ['life_stealer', 'viper', 'huskar', 'troll_warlord', 'ursa'],
    synergies: ['slardar', 'oracle', 'bounty_hunter', 'spirit_breaker', 'batrider', 'techies', 'mirana']
  },
  {
    name: 'invoker',
    id: 74,
    localized_name: 'Invoker',
    hero_class: 'intelligence',
    weak_against: ['nyx_assassin', 'lycan'],
    synergies: ['doom_bringer']
  },
  {
    name: 'silencer',
    id: 75,
    localized_name: 'Silencer',
    hero_class: 'intelligence',
    weak_against: ['lycan', 'broodmother', 'phantom_lancer', 'viper', 'abaddon', 'slark'],
    synergies: ['storm_spirit', 'chaos_knight']
  },
  {
    name: 'obsidian_destroyer',
    id: 76,
    localized_name: 'Outworld Devourer',
    hero_class: 'intelligence',
    weak_against: ['pugna', 'tinker', 'silencer', 'enchantress', 'zuus', 'riki', 'nyx_assassin'],
    synergies: ['dazzle', 'abaddon', 'omniknight']
  },
  {
    name: 'lycan',
    id: 77,
    localized_name: 'Lycan',
    hero_class: 'strength',
    weak_against: ['meepo', 'enchantress', 'axe', 'naga_siren', 'troll_warlord', 'shredder', 'bristleback', 'terrorblade', 'beastmaster'],
    synergies: ['kunkka', 'jakiro', 'lich', 'slardar', 'tidehunter', 'sand_king']
  },
  {
    name: 'brewmaster',
    id: 78,
    localized_name: 'Brewmaster',
    hero_class: 'strength',
    weak_against: ['antimage', 'treant', 'shredder', 'tidehunter', 'spectre', 'enigma'],
    synergies: ['life_stealer', 'huskar', 'bloodseeker', 'spectre', 'troll_warlord']
  },
  {
    name: 'shadow_demon',
    id: 79,
    localized_name: 'Shadow Demon',
    hero_class: 'intelligence',
    weak_against: ['magnataur', 'naga_siren', 'leshrac', 'faceless_void', 'ember_spirit', 'riki', 'terrorblade', 'earth_spirit'],
    synergies: ['antimage', 'phantom_assassin', 'juggernaut']
  },
  {
    name: 'lone_druid',
    id: 80,
    localized_name: 'Lone Druid',
    hero_class: 'agility',
    weak_against: ['ember_spirit', 'enigma', 'shredder'],
    synergies: ['batrider', 'chen']
  },
  {
    name: 'chaos_knight',
    id: 81,
    localized_name: 'Chaos Knight',
    hero_class: 'strength',
    weak_against: ['sven', 'earthshaker', 'jakiro', 'medusa', 'sand_king', 'kunkka', 'phoenix', 'magnataur', 'enigma', 'shredder', 'ember_spirit', 'dark_seer', 'axe'],
    synergies: ['wisp', 'ancient_apparition', 'phoenix', 'techies', 'keeper_of_the_light']
  },
  {
    name: 'meepo',
    id: 82,
    localized_name: 'Meepo',
    hero_class: 'agility',
    weak_against: ['sven', 'earthshaker', 'leshrac', 'winter_wyvern', 'ember_spirit', 'shredder', 'lich', 'jakiro', 'magnataur', 'lina'],
    synergies: ['huskar', 'lion', 'riki', 'tusk', 'axe', 'rubick']
  },
  {
    name: 'treant',
    id: 83,
    localized_name: 'Treant Protector',
    hero_class: 'strength',
    weak_against: ['death_prophet', 'chen', 'shadow_demon', 'Meepo', 'ancient_apparition', 'shredder', 'oracle'],
    synergies: ['disruptor', 'centaur', 'riki', 'phoenix']
  },
  {
    name: 'ogre_magi',
    id: 84,
    localized_name: 'Ogre Magi',
    hero_class: 'intelligence',
    weak_against: ['elder_titan', 'undying', 'beastmaster', 'phantom_lancer'],
    synergies: ['sniper', 'medusa', 'clinkz']
  },
  {
    name: 'undying',
    id: 85,
    localized_name: 'Undying',
    hero_class: 'strength',
    weak_against: ['gyrocopter', 'medusa', 'riki', 'sniper', 'clinkz', 'faceless_void', 'lycan', 'luna', 'bounty_hunter'],
    synergies: ['pugna', 'winter_wyvern', 'death_prophet', 'venomancer', 'dazzle']
  },
  {
    name: 'rubick',
    id: 86,
    localized_name: 'Rubick',
    hero_class: 'intelligence',
    weak_against: ['bristleback', 'riki'],
    synergies: ['meepo', 'morphling']
  },
  {
    name: 'disruptor',
    id: 87,
    localized_name: 'Disruptor',
    hero_class: 'intelligence',
    weak_against: ['furion', 'abaddon', 'ancient_apparition'],
    synergies: ['terrorblade', 'treant']
  },
  {
    name: 'nyx_assassin',
    id: 88,
    localized_name: 'Nyx Assassin',
    hero_class: 'agility',
    weak_against: ['visage', 'night_stalker', 'juggernaut', 'chaos_knight'],
    synergies: ['enigma', 'razor', 'medusa', 'naga_siren', 'antimage']
  },
  {
    name: 'naga_siren',
    id: 89,
    localized_name: 'Naga Siren',
    hero_class: 'agility',
    weak_against: ['shredder', 'tidehunter', 'leshrac', 'ember_spirit', 'centaur', 'gyrocopter', 'sand_king', 'enigma', 'earthshaker'],
    synergies: ['nyx_assassin']
  },
  {
    name: 'keeper_of_the_light',
    id: 90,
    localized_name: 'Keeper of the Light',
    hero_class: 'intelligence',
    weak_against: ['wisp', 'clinkz', 'lone_druid', 'arc_warden', 'antimage', 'batrider', 'phantom_assassin'],
    synergies: ['antimage', 'templar_assassin', 'rattletrap', 'chaos_knight']
  },
  {
    name: 'wisp',
    id: 91,
    localized_name: 'Io',
    hero_class: 'strength',
    weak_against: ['furion', 'oracle', 'naga_siren', 'queenofpain', 'ember_spirit', 'bane', 'leshrac', 'bristleback', 'lina'],
    synergies: ['sven', 'chaos_knight', 'razor', 'spectre', 'tiny', 'slark', 'legion_commander']
  },
  {
    name: 'visage',
    id: 92,
    localized_name: 'Visage',
    hero_class: 'intelligence',
    weak_against: ['ember_spirit', 'antimage', 'phantom_lancer', 'spectre', 'shadow_demon', 'keeper_of_the_light', 'doom_bringer', 'slark'],
    synergies: ['faceless_void', 'antimage', 'ember_spirit', 'tusk', 'life_stealer', 'slark']
  },
  {
    name: 'slark',
    id: 93,
    localized_name: 'Slark',
    hero_class: 'agility',
    weak_against: ['antimage', 'omniknight', 'shredder', 'riki', 'tiny', 'sand_king'],
    synergies: ['earth_spirit', 'wisp', 'visage', 'ancient_apparition']
  },
  {
    name: 'medusa',
    id: 94,
    localized_name: 'Medusa',
    hero_class: 'agility',
    weak_against: ['broodmother', 'keeper_of_the_light', 'riki', 'wisp', 'antimage', 'drow_ranger', 'sniper', 'alchemist'],
    synergies: ['drow_ranger', 'tusk', 'bane', 'nyx_assassin', 'vengefulspirit', 'bounty_hunter', 'ogre_magi', 'pudge']
  },
  {
    name: 'troll_warlord',
    id: 95,
    localized_name: 'Troll Warlord',
    hero_class: 'agility',
    weak_against: ['sand_king', 'winter_wyvern', 'centaur', 'leshrac', 'shredder'],
    synergies: ['beastmaster', 'broodmother', 'kunkka', 'faceless_void']
  },
  {
    name: 'centaur',
    id: 96,
    localized_name: 'Centaur Warrunner',
    hero_class: 'strength',
    weak_against: ['rattletrap', 'undying', 'juggernaut', 'death_prophet', 'witch_doctor', 'jakiro'],
    synergies: ['elder_titan', 'treant', 'necrolyte']
  },
  {
    name: 'magnataur',
    id: 97,
    localized_name: 'Magnus',
    hero_class: 'strength',
    weak_against: ['tinker', 'spectre'],
    synergies: ['sven', 'juggernaut', 'phoenix', 'life_stealer']
  },
  {
    name: 'shredder',
    id: 98,
    localized_name: 'Timbersaw',
    hero_class: 'strength',
    weak_against: ['silencer', 'keeper_of_the_light', 'skywrath_mage', 'juggernaut', 'clinkz', 'storm_spirit', 'obsidian_destroyer', 'zuus'],
    synergies: ['lich']
  },
  {
    name: 'bristleback',
    id: 99,
    localized_name: 'Bristleback',
    hero_class: 'strength',
    weak_against: ['obsidian_destroyer', 'necrolyte', 'venomancer', 'silencer', 'keeper_of_the_light', 'phoenix'],
    synergies: ['dazzle']
  },
  {
    name: 'tusk',
    id: 100,
    localized_name: 'Tusk',
    hero_class: 'strength',
    weak_against: ['templar_assassin'],
    synergies: ['slardar', 'medusa', 'visage', 'meepo']
  },
  {
    name: 'skywrath_mage',
    id: 101,
    localized_name: 'Skywrath Mage',
    hero_class: 'intelligence',
    weak_against: ['pugna', 'razor', 'chaos_knight', 'lycan', 'shadow_demon'],
    synergies: ['phantom_lancer', 'faceless_void', 'legion_commander']
  },
  {
    name: 'abaddon',
    id: 102,
    localized_name: 'Abaddon',
    hero_class: 'strength',
    weak_against: ['lone_druid', 'visage', 'broodmother', 'wisp', 'brewmaster', 'furion', 'antimage', 'shadow_demon', 'medusa'],
    synergies: ['luna', 'vengefulspirit', 'furion', 'witch_doctor', 'obsidian_destroyer']
  },
  {
    name: 'elder_titan',
    id: 103,
    localized_name: 'Elder Titan',
    hero_class: 'strength',
    weak_against: ['antimage', 'phoenix', 'oracle', 'life_stealer', 'ember_spirit', 'ancient_apparition', 'storm_spirit', 'rattletrap'],
    synergies: ['antimage', 'life_stealer', 'doom_bringer', 'centaur', 'morphling', 'templar_assassin']
  },
  {
    name: 'legion_commander',
    id: 104,
    localized_name: 'Legion Commander',
    hero_class: 'strength',
    weak_against: ['troll_warlord', 'ursa', 'skeleton_king', 'oracle', 'dragon_knight', 'enchantress'],
    synergies: ['techies', 'tinker', 'broodmother', 'dark_seer']
  },
  {
    name: 'ember_spirit',
    id: 106,
    localized_name: 'Ember Spirit',
    hero_class: 'agility',
    weak_against: ['clinkz', 'legion_commander', 'lion', 'shadow_shaman', 'skywrath_mage'],
    synergies: ['visage', 'chen']
  },
  {
    name: 'earth_spirit',
    id: 107,
    localized_name: 'Earth Spirit',
    hero_class: 'strength',
    weak_against: ['elder_titan', 'huskar', 'life_stealer', 'wisp', 'troll_warlord', 'techies'],
    synergies: ['spectre', 'life_stealer', 'beastmaster', 'juggernaut', 'slark', 'antimage']
  },
  // {
  //   name: 'abyssal_underlord',
  //   id: 108,
  //   localized_name: 'Abyssal Underlord',
  //   hero_class: 'strength',
  //   weak_against: [],
  //   synergies: []
  // },
  {
    name: 'terrorblade',
    id: 109,
    localized_name: 'Terrorblade',
    hero_class: 'agility',
    weak_against: ['axe', 'lina', 'shredder', 'dark_seer', 'slark', 'lich'],
    synergies: ['disruptor', 'rattletrap', 'batrider', 'beastmaster', 'slardar']
  },
  {
    name: 'phoenix',
    id: 110,
    localized_name: 'Phoenix',
    hero_class: 'strength',
    weak_against: ['huskar', 'clinkz', 'troll_warlord', 'juggernaut', 'oracle', 'antimage', 'life_stealer'],
    synergies: ['magnataur', 'riki', 'chaos_knight']
  },
  {
    name: 'techies',
    id: 105,
    localized_name: 'Techies',
    hero_class: 'intelligence',
    weak_against: ['dragon_knight', 'bane', 'furion', 'skeleton_king', 'centaur', 'oracle'],
    synergies: ['phantom_assassin', 'legion_commander', 'alchemist', 'enchantress', 'skeleton_king', 'chaos_knight']
  },
  {
    name: 'oracle',
    id: 111,
    localized_name: 'Oracle',
    hero_class: 'intelligence',
    weak_against: ['antimage', 'enigma', 'naga_siren', 'phantom_lancer', 'puck', 'magnataur', 'tusk'],
    synergies: ['antimage', 'beastmaster', 'alchemist', 'furion', 'rattletrap', 'faceless_void']
  },
  {
    name: 'winter_wyvern',
    id: 112,
    localized_name: 'Winter Wyvern',
    hero_class: 'intelligence',
    weak_against: ['shredder', 'ancient_apparition', 'sand_king', 'axe', 'spectre', 'queenofpain', 'undying'],
    synergies: ['phoenix', 'slardar', 'undying', 'antimage', 'templar_assassin', 'riki', 'spectre']
  },
  {
    name: 'arc_warden',
    id: 113,
    localized_name: 'Arc Warden',
    hero_class: 'agility',
    weak_against: ['antimage', 'enchantress', 'lone_druid', 'shredder', 'ember_spirit', 'axe', 'bane', 'phantom_lancer'],
    synergies: ['drow_ranger', 'visage', 'slark', 'ogre_magi']
  }
];
