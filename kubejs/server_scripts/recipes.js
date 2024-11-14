ServerEvents.recipes(e => {
  let armorTypes = [
    'helmet',
    'chestplate',
    'leggings',
    'boots'
  ]

  let toolTypes = [
    'sword',
    'pickaxe',
    'axe',
    'shovel',
    'hoe'
  ]

  let basicWeapons = [
    "dagger",
    "club",
    "spear",
    "hammer",
    "quarterstaff"
  ]

  let fantasyArmorLink = [
    ['dragonslayer', 'minecraft:dragon_breath'],
    ['wandering_wizard', 'endrem:witch_eye'],
    ['eclipse_soldier', 'new_soviet:black_knight'],
    ['hero', 'more_armor_trims:ram_armor_trim_smithing_template'],
    ['golden_horns', 'meadow:goat_cheese_block'],
    ['dark_lord', 'enderzoology:withering_dust'],
    ['thief', 'silentsdelight:warden_heart'],
    ['chess_board_knight', 'new_soviet:white_knight'],
    ['sunset_wings', 'xtraarrows:vex_wing'],
  ]

    e.shaped(
        Item.of('minecraft:trident', 1),
        [
          ' AA',
          ' BA',
          'C  '
        ],
        {
          A: 'snowballs_plus:evoker_fangs',
          B: 'minecraft:heart_of_the_sea',  
          C: 'plentyofarmors:ice_shard'
        }
      ).id("mosmods1:trident")
    
      e.shaped(
        Item.of('minecraft:chainmail_helmet', 1), 
        [
          '   ',
          'CBC',
          'A A'
        ],
        {
          A: 'minecraft:chain',
          B: 'minecraft:iron_ingot',
          C: 'minecraft:iron_nugget'
        }
      ).id("mosmods1:chainmail_helmet")
    
      e.shaped(
        Item.of('minecraft:chainmail_chestplate', 1), 
        [
          'B B',
          'CBC',
          'ACA'
        ],
        {
          A: 'minecraft:chain',
          B: 'minecraft:iron_ingot',
          C: 'minecraft:iron_nugget'
        }
      ).id("mosmods1:chainmail_chestplate")
    
      e.shaped(
        Item.of('minecraft:chainmail_leggings', 1), 
        [
          'BBB',
          'C C',
          'A A'
        ],
        {
          A: 'minecraft:chain',
          B: 'minecraft:iron_ingot',
          C: 'minecraft:iron_nugget'
        }
      ).id("mosmods1:chainmail_leggings")
    
      e.shaped(
        Item.of('minecraft:chainmail_boots', 1), 
        [
          '   ',
          'C C',
          'A A'
        ],
        {
          A: 'minecraft:chain',
          C: 'minecraft:iron_nugget'
        }
      ).id("mosmods1:chainmail_boots")
    
      e.shaped(
        Item.of('naturescompass:naturescompass', 1), 
        [
          'ABC',
          'DEF',
          'GHI'
        ],
        {
          A: 'minecraft:crimson_fungus',
          B: '#minecraft:saplings',
          C: 'minecraft:warped_fungus',
          D: 'minecraft:sculk_sensor',
          E: 'minecraft:compass',
          F: 'minecraft:clock',
          G: 'srias_flowers:blue_wisteria_sapling',
          H: '#c:saplings',
          I: 'regions_unexplored:alpha_sapling',
        }
      ).id("naturescompass:natures_compass")
    
      e.shaped(
        Item.of('minecraft:stick', 16), 
        [
          'A  ',
          'A  ',
          '   '
        ],
        {
          A: '#minecraft:logs'
        }
      ).id("mosmods1:sticks_from_logs")
    
      e.shaped(
        Item.of('minecraft:ladder', 4), 
        [
          'A A',
          'ABA',
          'A A'
        ],
        {
          A: 'minecraft:stick',
          B: 'minecraft:oak_planks'
        }
      ).id("minecraft:ladder")
    
      e.shaped(
        Item.of('armoroftheages:bamboo_hat', 1), 
        [
          ' A ',
          'AAA',
          'BBB'
        ],
        {
          A: 'minecraft:bamboo',
          B: 'minecraft:string'
        }
      ).id("armoroftheages:bamboo_hat")
    
      e.shaped(
        Item.of('armoroftheages:anubis_armor_head', 1), 
        [
          'CEC',
          'ABA',
          'CDC'
        ],
        {
          A: 'minecraft:lapis_block',
          B: 'minecraft:diamond_helmet',
          C: 'minecraft:gold_block',
          D: 'minecraft:netherite_scrap',
          E: 'minecraft:coal_block'
        }
      ).id("armoroftheages:anubis_armor_head")
    
      e.shaped(
        Item.of('armoroftheages:anubis_armor_chest', 1), 
        [
          'ADA',
          'CBC',
          'CCC'
        ],
        {
          A: 'minecraft:lapis_block',
          B: 'minecraft:diamond_chestplate',
          C: 'minecraft:gold_block',
          D: 'minecraft:netherite_scrap'
        }
      ).id("armoroftheages:anubis_armor_chest")
    
      e.shaped(
        Item.of('armoroftheages:anubis_armor_legs', 1), 
        [
          'ABA',
          'CDC',
          'C C'
        ],
        {
          A: 'minecraft:lapis_block',
          B: 'minecraft:diamond_leggings',
          C: 'minecraft:gold_block',
          D: 'minecraft:netherite_scrap'
        }
      ).id("armoroftheages:anubis_armor_legs")
    
      e.shaped(
        Item.of('armoroftheages:anubis_armor_feet', 1), 
        [
          'CBC',
          'ADA',
          '   '
        ],
        {
          A: 'minecraft:lapis_block',
          B: 'minecraft:diamond_boots',
          C: 'minecraft:gold_block',
          D: 'minecraft:netherite_scrap'
        }
      ).id("armoroftheages:anubis_armor_feet")
    
      e.shaped(
        Item.of('armoroftheages:centurion_armor_head', 1), 
        [
          'EBE',
          'ACA',
          'ADA'
        ],
        {
          A: 'minecraft:gold_ingot',
          B: 'minecraft:red_dye',
          C: '#enrichment:pillars',
          D: 'minecraft:netherite_scrap',
          E: 'minecraft:feather'
        }
      ).id("armoroftheages:centurion_armor_head")
    
      e.shaped(
        Item.of('armoroftheages:centurion_armor_chest', 1), 
        [
          'ADA',
          'BCB',
          'AAA'
        ],
        {
          A: 'minecraft:gold_ingot',
          B: 'minecraft:red_dye',
          C: '#enrichment:pillars',
          D: 'minecraft:netherite_scrap'
        }
      ).id("armoroftheages:centurion_armor_chest")
    
      e.shaped(
        Item.of('armoroftheages:centurion_armor_legs', 1), 
        [
          'ACA',
          'ADB',
          'B B'
        ],
        {
          A: 'minecraft:gold_ingot',
          B: 'minecraft:red_dye',
          C: '#enrichment:pillars',
          D: 'minecraft:netherite_scrap'
        }
      ).id("armoroftheages:centurion_armor_legs")
    
      e.shaped(
        Item.of('armoroftheages:centurion_armor_feet', 1), 
        [
          'ACA',
          'BDB',
          '   '
        ],
        {
          A: 'minecraft:gold_ingot',
          B: 'minecraft:leather',
          C: '#enrichment:pillars',
          D: 'minecraft:netherite_scrap'
        }
      ).id("armoroftheages:centurion_armor_feet")
    
      e.shaped(
        Item.of('armoroftheages:holy_armor_chest', 1), 
        [
          'BDB',
          'CAC',
          'BCB'
        ],
        {
          A: 'minecraft:diamond_chestplate',
          B: 'minecraft:gold_block',
          C: 'minecraft:iron_block',
          D: 'mcwholidays:stone_cross'
        }
      ).id("armoroftheages:holy_armor_chest")
      
      e.shaped(
          Item.of('botania:enchanted_soil', 1),
          [
            'BBB',
            'BAB',
            'BCB'
          ],
          {
            A: 'minecraft:grass_block',
            B: 'minecraft:diamond',
            C: 'exlinefurniture:flower_arrangement2'
          }
      ).id("enrichment:enchanted_soil")
  
      e.shaped(
        Item.of('botania:rainbow_rod', 1),
        [
          ' CB',
          'DAC',
          'AE '
        ],
        {
          A: 'botania:elementium_ingot',
          B: 'botania:dragonstone',
          C: 'botania:pixie_dust',
          D: 'xtraarrows:diamond_freezing_arrow',
          E: 'minecraft:globe_banner_pattern'
        }
      ).id("botania:rainbow_rod")
    
      e.shaped(
          Item.of('botania:gravity_rod', 1),
          [
            ' EC',
            'DBE',
            'AF '
          ],
          {
            A: 'botania:dreamwood_wand',
            B: 'botania:dragonstone',
            C: 'betterend:clawfern',
            D: 'sophisticatedbackpacks:battery_upgrade',
            E: 'regions_unexplored:pointed_redstone',
            F: 'xtraarrows:gravity_controller'
          }
      ).id("botania:gravity_rod")
      
      e.shaped(
          Item.of('botania:water_ring', 1),
          [
            'BAD',
            'ACA',
            'EAF'
          ],
          {
            A: 'botania:manasteel_ingot',
            B: 'botania:rune_water',
            C: 'minecraft:heart_of_the_sea',
            D: 'minecraft:pufferfish',
            E: 'minecraft:cod',
            F: 'minecraft:trident'
          }
      ).id("botania:water_ring")
      
      e.shaped(
          Item.of('botania:dodge_ring', 1),
          [
            'CA ',
            'ADA',
            ' AB'
          ],
          {
            A: 'botania:manasteel_ingot',
            B: 'botania:rune_air',
            C: 'minecraft:emerald',
            D: 'minecraft:wither_skeleton_skull'
          }
      ).id("botania:dodge_ring")
      
      e.shaped(
          Item.of('botania:mining_ring', 1),
          [
            'BAC',
            'ADA',
            ' A '
          ],
          {
            A: 'botania:manasteel_ingot',
            B: 'botania:rune_earth',
            C: 'minecraft:golden_pickaxe',
            D: 'beachparty:rubber_ring_axolotl'
          }
      ).id("botania:mining_ring")
    
      e.shaped(
          Item.of('botania:holy_cloak', 1),
          [
            'DBD',
            'CDC',
            'CAC'
          ],
          {
            A: 'botania:life_essence',
            B: 'botania:black_lotus',
            C: 'minecraft:glowstone_dust',
            D: 'minecraft:white_wool'
          }
      ).id("botania:holy_cloak")
      
      e.shaped(
          Item.of('botania:balance_cloak', 1),
          [
            'DBD',
            'CDC',
            'CAC'
          ],
          {
            A: 'botania:life_essence',
            B: 'botania:black_lotus',
            C: 'minecraft:emerald',
            D: 'minecraft:light_gray_wool'
          }
      ).id("botania:balance_cloak")
      
      e.shaped(
          Item.of('botania:unholy_cloak', 1),
          [
            'DBD',
            'CDC',
            'CAC'
          ],
          {
            A: 'botania:life_essence',
            B: 'botania:black_lotus',
            C: 'minecraft:redstone',
            D: 'minecraft:black_wool'
          }
      ).id("botania:unholy_cloak")
    
      e.shaped(
          Item.of('botania:invisibility_cloak', 1),
          [
            'CDC',
            'BEB',
            'BAB'
          ],
          {
            A: 'botania:mana_pearl',
            B: 'botania:mana_glass',
            C: 'minecraft:prismarine_crystals',
            D: 'minecraft:white_wool',
            E: 'mutantmonsters:mutant_skeleton_rib_cage'
          }
      ).id("botania:invisibility_cloak")
      
      e.shaped(
          Item.of('botania:super_lava_pendant', 1),
          [
            'BEB',
            'BCB',
            'DAD'
          ],
          {
            A: 'botania:life_essence',
            B: 'minecraft:blaze_rod',
            C: 'botania:lava_pendant',
            D: 'minecraft:nether_brick',
            E: 'minecraft:wither_skeleton_skull'
          }
      ).id("botania:super_lava_pendant")
      
      e.shaped(
          Item.of('botania:super_cloud_pendant', 1),
          [
            'BEB',
            'BCB',
            'DAD'
          ],
          {
            A: 'botania:life_essence',
            B: 'minecraft:ghast_tear',
            C: 'botania:cloud_pendant',
            D: 'minecraft:white_wool',
            E: 'botania:overgrowth_seed'
          }
      ).id("botania:super_cloud_pendant")
    
      e.shaped(
          Item.of('botania:travel_belt', 1),
          [
            'CDF',
            'DED',
            'ADB'
          ],
          {
            A: 'botania:manasteel_ingot',
            B: 'botania:rune_air',
            C: 'botania:rune_water',
            D: 'minecraft:leather',
            E: 'minecraft:cod',
            F: 'minecraft:salmon'
          }
      ).id("botania:travel_belt")
      
      e.shaped(
          Item.of('botania:super_travel_belt', 1),
          [
            'CDE',
            'DBD',
            'ADC'
          ],
          {
            A: 'botania:life_essence',
            B: 'botania:travel_belt',
            C: 'botania:elementium_ingot',
            D: 'botania:black_lotus',
            E: 'phantom_armor:phantom_leather'
          }
      ).id("botania:super_travel_belt")
    
      e.shaped(
          Item.of('botania:speed_up_belt', 1),
          [
            'ECE',
            'BAB',
            'EDE'
          ],
          {
            A: 'botania:travel_belt',
            B: 'botania:grass_seeds',
            C: 'minecraft:map',
            D: 'minecraft:sugar',
            E: 'botania:black_lotus'
          }
      ).id("botania:speed_up_belt")
    
      e.shaped(
          Item.of('botania:knockback_belt', 1),
          [
            'CDE',
            'DED',
            'ADB'
          ],
          {
            A: 'botania:manasteel_ingot',
            B: 'botania:rune_earth',
            C: 'botania:rune_fire',
            D: 'minecraft:leather',
            E: 'botania:black_lotus'
          }
      ).id("botania:knockback_belt")
    
      let map = [
        ["helmet", "spring"],
        ["chestplate", "summer"],
        ["leggings", "autumn"],
        ["boots", "winter"],  
      ].forEach((item) => {
        e.shaped(
          Item.of(`botania:terrasteel_${item[0]}`, 1),
          [
            'CDC',
            'BAB',
            'EBE'
          ],
          {
            A: `botania:elementium_${item[0]}`,
            B: 'botania:terrasteel_ingot',
            C: 'botania:livingwood_twig',
            D: `botania:rune_${item[1]}`,
            E: 'minecraft:netherite_ingot'
          }
      ).id(`botania:terrasteel_${item[0]}`)
      })
    
      e.shaped(
        Item.of('sophisticatedbackpacks:backpack', 1), 
        [
          ' DB',
          'BCA',
          ' EB'
        ],
        {
          A: 'sophisticatedbackpacks:upgrade_base',
          B: 'minecraft:string',
          C: 'camping:small_backpack',
          D: 'minecraft:leather_chestplate',
          E: 'minecraft:leather_leggings'
        }
      ).id("sophisticatedbackpacks:backpack")
      
      e.shaped(
        Item.of('immersive_armors:steampunk_helmet', 1), 
        [
          'A A',
          'B E',
          'DCD'
        ],
        {
          A: 'betterend:leather_stripe',
          B: 'minecraft:redstone_torch',
          C: 'minecraft:ender_eye',
          D: 'minecraft:white_stained_glass',
          E: 'minecraft:golden_carrot'
        }
      ).id("immersive_armors:steampunk_helmet")
      
      e.shaped(
        Item.of('immersive_armors:heavy_helmet', 1), 
        [
          'AAA',
          'ABA',
          '   '
        ],
        {
          A: 'minecraft:iron_block',
          B: 'minecraft:netherite_block'
        }
      ).id("immersive_armors:heavy_helmet")
    
      e.shaped(
        Item.of('immersive_armors:steampunk_chestplate', 1), 
        [
          'B B',
          'DBA',
          'BCA'
        ],
        {
          A: 'minecraft:clock',
          B: 'minecraft:gold_ingot',
          C: 'minecraft:piston',
          D: 'minecraft:compass'
        }
      ).id("immersive_armors:steampunk_chestplate")
    
      e.shaped(
        Item.of('immersive_armors:steampunk_leggings', 1), 
        [
          'AAA',
          'CBC',
          'A A'
        ],
        {
          A: 'minecraft:gold_ingot',
          B: 'minecraft:rabbit_foot',
          C: 'minecraft:piston'
        }
      ).id("immersive_armors:steampunk_leggings")
    
      e.shaped(
        Item.of('immersive_armors:steampunk_boots', 1), 
        [
          'C C',
          'A A',
          'B B'
        ],
        {
          A: 'minecraft:gold_ingot',
          B: 'minecraft:phantom_membrane',
          C: 'minecraft:piston'
        }
      ).id("immersive_armors:steampunk_boots")
      
      e.shaped(
        Item.of('immersive_armors:heavy_boots', 1), 
        [
          'ABA',
          'ABA',
          'B B'
        ],
        {
          A: 'minecraft:iron_block',
          B: 'minecraft:netherite_ingot'
        }
      ).id("immersive_armors:heavy_boots")
    
      e.shaped(
          Item.of('immersive_paintings:painting', 1),
          [
              'BBB',
              'BAB',
              'BCB'
          ],
          {
              A: '#c:dyes',
              B: 'minecraft:paper',
              C: 'minecraft:painting'
          }
      ).id("immersive_paintings:painting")
    
      e.shaped(
        Item.of('snowballs_plus:healthy_snowball', 40), 
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'minecraft:snowball',
          B: '#enrichment:good_heart'
        }
      ).id("snowballs_plus:healthy_snowball")
    
      e.shaped(
        Item.of('snowballs_plus:bloodthirsty_snowball', 64), 
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'minecraft:snowball',
          B: '#enrichment:evil_heart'
        }
      ).id("snowballs_plus:bloodthirsty_snowball")
    
      e.shaped(
        Item.of('snowballs_plus:fangs_snowball', 40), 
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'minecraft:snowball',
          B: 'snowballs_plus:evoker_fangs'
        }
      ).id("snowballs_plus:fangs_snowball")
    
      e.shaped(
        Item.of('plentyofarmors:marine_diamond', 1), 
        [
          '   ',
          'CBC',
          ' A '
        ],
        {
          A: 'minecraft:diamond_block',
          B: 'minecraft:heart_of_the_sea',
          C: 'minecraft:sea_lantern'
        }
      ).id("plentyofarmors:marine_diamond")
    
      e.remove({ id: 'plentyofarmors:marine_diamond_0' })
  
      e.remove({ id: 'plentyofarmors:marine_diamond_1' })
  
      e.shaped(
        Item.of('plentyofarmors:stardusite_ingot', 1), 
        [
          'ABC',
          'DIE',
          'HFG'
        ],
        {
          A: 'mythicupgrades:ruby_upgrade_smithing_template',
          B: 'mythicupgrades:topaz_upgrade_smithing_template',
          C: 'mythicupgrades:peridot_upgrade_smithing_template',
          D: 'mythicupgrades:jade_upgrade_smithing_template',
          E: 'mythicupgrades:aquamarine_upgrade_smithing_template',
          F: 'mythicupgrades:sapphire_upgrade_smithing_template',
          G: 'mythicupgrades:ametrine_upgrade_smithing_template',
          H: 'minecraft:netherite_upgrade_smithing_template',
          I: 'mythicupgrades:necoium_ingot'
        }
      ).id("plentyofarmors:stardusite_ingot")
    
      e.shaped(
        Item.of('umbrellas:umbrella', 1), 
        [
          'AAA',
          'BCB',
          ' C '
        ],
        {
          A: 'mcwholidays:pyramid_cobweb',
          B: 'phantom_armor:phantom_leather',
          C: 'betterend:leather_wrapped_stick'
        }
      ).id("umbrellas:umbrella")
    
    e.shapeless('minecraft:gunpowder', ['betterend:crystalline_sulphur', 'meadow:alpine_salt', '#minecraft:coals']).id('mosmods2:shapeless/gunpowder_from_sulfur')
    e.shapeless('4x minecraft:stick', '#regions_unexplored:branches').id('mosmods2:shapeless/stick_from_branch')
    e.shapeless('regions_unexplored:mossy_stone', ['minecraft:stone', '#kubejs:moss']).id('kubejs:shapeless/mossy_stone')
    e.shapeless('minecraft:ender_eye', ['minecraft:ender_pearl', 'minecraft:blaze_powder', 'minecraft:blaze_powder']).id('minecraft:ender_eye')
    e.shapeless('origins:orb_of_origin', ['endrem:old_eye', 'endrem:rogue_eye', 'endrem:nether_eye', 'endrem:cold_eye', 'endrem:lost_eye', 'endrem:corrupted_eye', 'endrem:cursed_eye', 'endrem:black_eye', 'endrem:magical_eye']).id('enrichment:orb_of_origin')
    e.shapeless('plentyofarmors:stardusite_helmet', ['plentyofarmors:stardusite_ingot', 'minecraft:nether_star', 'bosses_of_mass_destruction:ancient_anima', 'mutantmonsters:mutant_skeleton_skull', 'plentyofarmors:amethyst_gem', 'minecraft:echo_shard', '#regions_unexplored:prismarite_crystals', 'betterend:eternal_crystal', 'fantasy_armor:moon_crystal']).id('plentyofarmors:stardusite_helmet')
    e.shapeless('plentyofarmors:stardusite_chestplate', ['plentyofarmors:stardusite_ingot', 'silentsdelight:warden_heart', 'bosses_of_mass_destruction:blazing_eye', 'mutantmonsters:endersoul_hand',  'plentyofarmors:amethyst_gem', 'minecraft:echo_shard', '#regions_unexplored:prismarite_crystals', 'betterend:eternal_crystal', 'fantasy_armor:moon_crystal']).id('plentyofarmors:stardusite_chestplate')
    e.shapeless('plentyofarmors:stardusite_leggings', ['plentyofarmors:stardusite_ingot', 'more_armor_trims:ram_armor_trim_smithing_template', 'bosses_of_mass_destruction:obsidian_heart', 'mutantmonsters:hulk_hammer',  'plentyofarmors:amethyst_gem', 'minecraft:echo_shard', '#regions_unexplored:prismarite_crystals', 'betterend:eternal_crystal', 'fantasy_armor:moon_crystal']).id('plentyofarmors:stardusite_leggings')
    e.shapeless('plentyofarmors:stardusite_boots', ['plentyofarmors:stardusite_ingot', 'minecraft:tide_armor_trim_smithing_template', 'bosses_of_mass_destruction:void_thorn', 'mutantmonsters:creeper_shard',  'plentyofarmors:amethyst_gem', 'minecraft:echo_shard', '#regions_unexplored:prismarite_crystals', 'betterend:eternal_crystal', 'fantasy_armor:moon_crystal']).id('plentyofarmors:stardusite_boots')
    // blasting
    e.blasting('minecraft:glass', 'minecraft:sand').xp(0.1).id('mosmods2:blasting/glass')
    e.blasting('minecraft:stone', 'minecraft:cobblestone').xp(0.1).id('mosmods2:blasting/stone')
    // smithing
    armorTypes.forEach((piece) => {
      e.smithing(`minecraft:netherite_${piece}`, 'minecraft:black_dye', `minecraft:diamond_${piece}`, 'minecraft:netherite_ingot').id(`minecraft:netherite_${piece}_smithing`)
      fantasyArmorLink.forEach((link) => {
        e.smithing(`fantasy_armor:${link[0]}_${piece}`, 'fantasy_armor:moon_crystal', `minecraft:netherite_${piece}`, link[1]).id(`fantasy_armor:${link[0]}_${piece}`)
      })
      e.smithing(`plentyofarmors:ender_netherite_${piece}`, 'minecraft:netherite_upgrade_smithing_template', `minecraft:netherite_${piece}`, `plentyofarmors:heart_of_the_end`).id(`plentyofarmors:ender_netherite_${piece}`)
      e.smithing(`plentyofarmors:marine_diamond_${piece}`, 'minecraft:netherite_upgrade_smithing_template', `minecraft:netherite_${piece}`, `plentyofarmors:marine_diamond`).id(`plentyofarmors:marine_diamond_${piece}`)
      e.smithing(`plentyofarmors:stardusite_${piece}`, '#letsdo:completionist_banner', `#enrichment:end_game_${piece}`, `plentyofarmors:stardusite_${piece}`).id(`enrichment:endgame_to_stardusite_${piece}_upgrade`)
    })
    toolTypes.forEach((tool) => { 
      if (tool != "hoe") {
        e.smithing(`minecraft:netherite_${tool}`, 'minecraft:black_dye', `minecraft:diamond_${tool}`, 'minecraft:netherite_ingot').id(`minecraft:netherite_${tool}_smithing`)
      }
    })
    basicWeapons.forEach((tool) => { 
      e.smithing(`basicweapons:netherite_${tool}`, 'minecraft:black_dye', `basicweapons:diamond_${tool}`, 'minecraft:netherite_ingot').id(`basicweapons:netherite_${tool}_smithing`)
    })
    e.smithing('botania:terra_pick', 'botania:obedience_stick', '#enrichment:end_game_pick', 'botania:terrasteel_ingot').id('botania:terra_pick')
    e.smithing('botania:terra_axe', 'botania:obedience_stick', '#enrichment:end_game_axe', 'botania:terrasteel_ingot').id('botania:terra_axe')
    // chess pieces
    let monochrome = [
      "white",
      "black"
    ].forEach((color) => {
      e.shaped(
        Item.of(`new_soviet:${color}_pawn`, 2), 
        [
          ' B ',
          ' B ',
          ' A '
        ],
        {
          A: '#kubejs:soft_carpet',
          B: `minecraft:${color}_concrete`
        }
      ).id(`new_soviet:${color}_pawn`)

      e.shapeless(`new_soviet:${color}_queen`, [`new_soviet:${color}_pawn`, `candlelight:flower_crown`]).id(`new_soviet:${color}_queen`)
      e.shapeless(`new_soviet:${color}_king`, [`new_soviet:${color}_pawn`, `minecraft:golden_helmet`]).id(`new_soviet:${color}_king`)
      e.shapeless(`new_soviet:${color}_knight`, [`new_soviet:${color}_pawn`, `plushies:horse_plushie`]).id(`new_soviet:${color}_knight`)
      e.shapeless(`new_soviet:${color}_bishop`, [`new_soviet:${color}_pawn`, `mcwholidays:stone_cross`]).id(`new_soviet:${color}_bishop`)
      e.shapeless(`new_soviet:${color}_rook`, [`new_soviet:${color}_pawn`, `beachparty:sand_bucket`]).id(`new_soviet:${color}_rook`)
      e.stonecutting(`4x new_soviet:${color}_checker`, `minecraft:${color}_concrete`)
    })
})