ServerEvents.tags('item', event => {
    let armorTypes = [
        "helmet",
        "chestplate",
        "leggings",
        "boots"
    ]

    let starting_game_sets = [
        "minecraft:leather",
        "plentyofarmors:oak",
        "plentyofarmors:birch",
        "plentyofarmors:jungle",
        "plentyofarmors:spruce",
        "plentyofarmors:dark_oak",
        "plentyofarmors:acacia",
        "plentyofarmors:mangrove",
        "plentyofarmors:cactus",
        "plentyofarmors:slime",
        "plentyofarmors:brick",
        "immersive_armors:wooden",
        "immersive_armors:bone"
    ]

    let early_game_sets = [
        "minecraft:chainmail",
        "minecraft:golden",
        "plentyofarmors:brick",
        "plentyofarmors:nether_brick",
        "plentyofarmors:lapis",
        "plentyofarmors:quartz",
        "plentyofarmors:redstone",
        "plentyofarmors:copper",
        "immersive_armors:wither",
        "immersive_armors:warrior",
        "immersive_armors:robe",
        "immersive_armors:slime",
        "spider_caves:spider",
        "meadow:fur"
    ]

    let mid_game_sets = [
        "minecraft:iron",
        "immersive_armors:steampunk",
        "plentyofarmors:phantom",
        "plentyofarmors:crying_obsidian",
        "plentyofarmors:obsidian",
        "plentyofarmors:hardened_ice",
        "plentyofarmors:reinforced_iron",
        "plentyofarmors:emerald",
        "phantom_armor:phantom_armor",
        "betterend:terminite",
        "immersive_armors:divine",
    ]

    let late_game_sets = [
        "minecraft:diamond",
        "minecraft:netherite",
        "mutantmonsters:mutant_skeleton",
        "immersive_armors:heavy",
        "gildedarmor:gilded_netherite",
        "astro:mauveine",
        "dungeonnowloading:spawner",
        "fantasy_armor:eclipse_soldier",
        "fantasy_armor:dragonslayer",
        "fantasy_armor:hero",
        "fantasy_armor:golden_horns",
        "fantasy_armor:thief",
        "fantasy_armor:wandering_wizard",
        "fantasy_armor:chess_board_knight",
        "fantasy_armor:dark_lord",
        "fantasy_armor:sunset_wings",
        "immersive_armors:prismarine",
        "plentyofarmors:frozen_diamond",
        "plentyofarmors:echo_shard",
        "plentyofarmors:amethyst",
        "plentyofarmors:ender",
        "enva:titanium",
    ]

    let end_game_sets = [
        "betterend:crystalite",
        "mythicupgrades:ruby",
        "mythicupgrades:topaz",
        "mythicupgrades:peridot",
        "mythicupgrades:jade",
        "mythicupgrades:aquamarine",
        "mythicupgrades:sapphire",
        "mythicupgrades:ametrine",
        "plentyofarmors:ender_netherite",
        "plentyofarmors:marine_diamond",
    ]

    let mossAdditions = [
        'minecraft:moss_block',
        "minecraft:moss_carpet",
        "betterend:umbrella_moss",
        "betterend:umbrella_moss_tall",
        "betterend:creeping_moss",
        "betterend:twisted_umbrella_moss",
        "betterend:twisted_umbrella_moss_tall",
        "betterend:vaiolush_fern",
        "betterend:fracturn",
        "betterend:clawfern",
        "betterend:crystal_moss_cover",
        "betterend:tail_moss",
        "betterend:cyan_moss",
        "betterend:twisted_moss",
        "betterend:bulb_moss",
        "betterend:jungle_fern",
        "regions_unexplored:prismoss_sprout",
        "regions_unexplored:spanish_moss",
    ].forEach((moss) => {
        event.add('kubejs:moss', moss)
    })

    let eggs = [
        "minecraft:egg",
        "minecraft:turtle_egg",
        "minecraft:sniffer_egg",
        "enderzoology:owl_egg",

    ].forEach((moss) => {
        event.add('kubejs:egg', moss)
    })

    event.add('mosmods2:cave_dwarf_tool', [
        /.*pickaxe$/,
        "mutantmonsters:hulk_hammer",
        "terraqueous:hammer"
    ])
    event.add('kubejs:precious_equipment', [
        /minecraft:golden_(helmet|chestplate|leggings|boots|axe|sword|pickaxe|shovel|hoe)/,
        /minecraft:netherite_(helmet|chestplate|leggings|boots|axe|sword|pickaxe|shovel|hoe)/,
        /mythicupgrades:(ruby|topaz|peridot|jade|aquamarine|sapphire|ametrine)_(helmet|chestplate|leggings|boots|axe|sword|pickaxe|shovel|hoe)/,
        /create:netherite_diving_(helmet|backtank|boots)/,
        /gildedarmor:gilded_.*_(helmet|chestplate|leggings|boots)/,
        /betterend:crystalite_(helmet|chestplate|leggings|boots)/,
        /plentyofarmors:(ender_netherite|marine_diamond|stardusite)_(helmet|chestplate|leggings|boots)/,
        /fantasy_armor:.*_(helmet|chestplate|leggings|boots)/,
        /armoroftheages:(anubis|centurion)_armor_(helmet|chestplate|leggings|boots)/,
        /things:(monocle|moss_necklace|placebo|mining_gloves|riot_gauntlet|hades_crystal|enchanted_wax_gland|rabbit_foot_charm|luck_of_the_irish|socks|arm_extender|shocker_absorber|broken_watch)/,
        "minecraft:elytra",
        "betterend:elytra_crystalite"
    ])

    // meats
    event.add('origins:meat', [
        '#minecraft:fishes',
        'farmersdelight:bacon_and_eggs',
        'farmersdelight:bacon_sandwich',
        'farmersdelight:bacon',
        'farmersdelight:baked_cod_stew',
        'farmersdelight:barbecue_stick',
        'farmersdelight:beef_patty',
        'farmersdelight:beef_stew',
        'farmersdelight:bone_broth',
        'farmersdelight:chicken_cuts',
        'farmersdelight:chicken_sandwich',
        'farmersdelight:chicken_soup',
        'farmersdelight:cod_roll',
        'farmersdelight:cod_slice',
        'farmersdelight:cooked_bacon',
        'farmersdelight:cooked_chicken_cuts',
        'farmersdelight:cooked_cod_slice',
        'farmersdelight:cooked_mutton_chops',
        'farmersdelight:cooked_salmon_slice',
        'farmersdelight:dog_food',
        'farmersdelight:fish_stew',
        'farmersdelight:grilled_salmon',
        'farmersdelight:ham',
        'farmersdelight:hamburger',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:minced_beef',
        'farmersdelight:mutton_chops',
        'farmersdelight:mutton_wrap',
        'farmersdelight:noodle_soup',
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:pasta_with_mutton_chop',
        'farmersdelight:pumpkin_soup',
        'farmersdelight:ratatouille',
        'farmersdelight:roast_chicken',
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:salmon_roll',
        'farmersdelight:salmon_slice',
        'farmersdelight:shepherds_pie',
        'farmersdelight:smoked_ham',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:steak_and_potatoes',
        'farmersdelight:dumplings',
    ])

    // vegetarian
    event.add('kubejs:vegetarian', [
        'betterend:amber_root_raw',
        'betterend:blossom_berry_jelly',
        'betterend:blossom_berry',
        'betterend:bolux_mushroom_cooked',
        'betterend:cave_pumpkin_pie',
        'betterend:chorus_mushroom_cooked',
        'betterend:chorus_mushroom_raw',
        'betterend:shadow_berry_cooked',
        'betterend:shadow_berry_jelly',
        'betterend:shadow_berry_raw',
        'betterend:sweet_berry_jelly',
        'betterend:umbrella_cluster_juice',
        'create:chocolate_glazed_berries',
        'create:honeyed_apple',
        'farmersdelight:apple_cider',
        'farmersdelight:apple_pie_slice',
        'farmersdelight:cabbage_leaf',
        'farmersdelight:cabbage_rolls',
        'farmersdelight:cabbage',
        'farmersdelight:cake_slice',
        'farmersdelight:chocolate_pie_slice',
        'farmersdelight:cooked_rice',
        'farmersdelight:egg_sandwich',
        'farmersdelight:fried_egg',
        'farmersdelight:fried_rice',
        'farmersdelight:fruit_salad',
        'farmersdelight:glow_berry_custard',
        'farmersdelight:honey_cookie',
        'farmersdelight:kelp_roll_slice',
        'farmersdelight:kelp_roll',
        'farmersdelight:melon_popsicle',
        'farmersdelight:mixed_salad',
        'farmersdelight:mushroom_rice',
        'farmersdelight:nether_salad',
        'farmersdelight:onion',
        'farmersdelight:pie_crust',
        'farmersdelight:pumpkin_slice',
        'farmersdelight:raw_pasta',
        'farmersdelight:stuffed_potato',
        'farmersdelight:stuffed_pumpkin',
        'farmersdelight:sweet_berry_cheesecake_slice',
        'farmersdelight:sweet_berry_cookie',
        'farmersdelight:tomato_sauce',
        'farmersdelight:tomato',
        'farmersdelight:vegetable_noodles',
        'farmersdelight:vegetable_soup',
        'farmersdelight:wheat_dough',
        'minecraft:apple',
        'minecraft:baked_potato',
        'minecraft:beetroot_soup',
        'minecraft:beetroot',
        'minecraft:bread',
        'minecraft:cake',
        'minecraft:carrot',
        'minecraft:chorus_fruit',
        'minecraft:cookie',
        'minecraft:dried_kelp',
        'minecraft:glow_berries',
        'minecraft:golden_carrot',
        'minecraft:melon_slice',
        'minecraft:mushroom_stew',
        'minecraft:poisonous_potato',
        'minecraft:potato',
        'minecraft:pumpkin_pie',
        'minecraft:sweet_berries',
        'regions_unexplored:duskmelon_slice',
        'regions_unexplored:hanging_earlight_fruit',
        'regions_unexplored:meadow_sage',
        'regions_unexplored:salmonberry',
        'snowyspirit:candy_cane',
        'snowyspirit:eggnog',
        'snowyspirit:gingerbread_cookie',
    ])

    // stuff that ignores vegetarian vs carnivore
    event.add('origins:ignore_diet', [
        'create:bar_of_chocolate',
        'create:builders_tea',
        'minecraft:enchanted_golden_apple',
        'minecraft:golden_apple',
        'minecraft:honey_bottle',
        'minecraft:suspicious_stew',
    ])

    event.add('enrichment:columns', [
        /terraqueous:.*capital$/
    ])

    event.add('enrichment:pillars', [
        /.*pillar$/
    ])

    event.remove('bakery:knives', [
        /.*shears.*/,
        /.*sword.*/
    ])

    event.add('bakery:knives', [
        "#c:tools/knives"
    ])

    event.add('enrichment:rabbit_plushes', [
        /plushies:.*rabbit_plushie$/
    ])

    event.add('c:shields', [
        'new_shield_variants:tnt_shield'
    ])

    event.add('origins:shields', [
        '#c:shields'
    ])

    event.add('candlelight:rings', [
        /.*:.*chocolate.*/,
        /.*:.*diamond.*/,
        /.*:.*gold.*/,
        /.*:.*(crystal|shard|shards|gem)$/
    ])

    event.add('camping:backpack_blacklist', [
        "#vinery:basket_blacklist",
        "#furnish:crate_blacklist",
    ])

    event.add('vinery:basket_blacklist', [
        "#camping:backpack_blacklist",
        "#furnish:crate_blacklist",
    ])

    event.add('furnish:crate_blacklist', [
        "#vinery:basket_blacklist",
        "#camping:backpack_blacklist",
    ])

    event.add('kubejs:soft_carpet', [
        /(minecraft:.*|.*:.*(wool|moss))_carpet$/
    ])

    event.add('furnish:mail', [
        /candlelight:note_paper.*/,
        /.*:.*shulker_box.*/
    ])

    event.add('enrichment:good_heart', [
        'minecraft:heart_of_the_sea',
        'plushables:heart_of_gold',
        'simplehats:floatinghearts'
    ])

    event.add('enrichment:evil_heart', [
        'bosses_of_mass_destruction:obsidian_heart',
        'plentyofarmors:heart_of_the_end',
        'silentsdelight:warden_heart'
    ])

    event.add('letsdo:completionist_banner', [
        'bakery:bakery_standard',
        'bloomingnature:bloomingnature_standard',
        'candlelight:candlelight_standard',
        'herbalbrews:herbalbrews_standard',
        'meadow:meadow_standard',
        'vinery:vinery_standard',
    ])

    armorTypes.forEach((piece) => {
        starting_game_sets.forEach((set) => {
            event.add(`enrichment:starting_game_${piece}`, `${set}_${piece}`)
        })
        early_game_sets.forEach((set) => {
            event.add(`enrichment:early_game_${piece}`, `${set}_${piece}`)
        })
        mid_game_sets.forEach((set) => {
            event.add(`enrichment:mid_game_${piece}`, `${set}_${piece}`)
        })
        late_game_sets.forEach((set) => {
            event.add(`enrichment:late_game_${piece}`, `${set}_${piece}`)
        })
        end_game_sets.forEach((set) => {
            event.add(`enrichment:end_game_${piece}`, `${set}_${piece}`)
        })
        event.add(`enrichment:late_game_helmet`, `mutantmonsters:mutant_skeleton_skull`)
    })
})
  
// ⚠️ BLOCKS ⚠️
ServerEvents.tags('block', e => {
    // fixing frozen grass being placed on top of snowrealmagic:snow
    e.remove('regions_unexplored:snow_plant_can_survive_on', '#minecraft:snow')
    e.add('regions_unexplored:snow_plant_can_survive_on', [
        'minecraft:snow',
        'minecraft:snow_block'
    ])

    e.add('snowrealmagic:containables', [
        '#regions_unexplored:grass',
    ])
})