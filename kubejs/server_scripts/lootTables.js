LootJS.modifiers(e => {


    // ⚠️ ADDING ⚠️
    // silk-touchable budding amethyst
    e.addBlockLootModifier('minecraft:budding_amethyst')
        .removeLoot(Ingredient.all)
        .pool(p => {
            p.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
            p.addLoot('minecraft:budding_amethyst')
        })
        .pool(p => {
            p.not(not => { not.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')) })
            p.addLoot('minecraft:amethyst_block')
        })

    e.addLootTableModifier('minecraft:chests/end_city_treasure').addLoot('betterend:ender_dust')
    e.addLootTableModifier('betterend:chests/end_village_bonus_loot').addLoot('betterend:ender_dust')
    e.addLootTableModifier('betterend:chests/end_village_loot').addLoot('betterend:ender_dust')
    e.addLootTableModifier('betterend:chests/end_village_template_loot').addLoot('betterend:ender_dust')
    e.addLootTableModifier('betterdeserttemples:chests/pharaoh_hidden').addLoot('endrem:old_eye')
    e.addLootTableModifier('betterjungletemples:chests/treasure').addLoot('endrem:rogue_eye')
    e.addLootTableModifier('betterfortresses:chests/puzzle').addLoot('endrem:nether_eye')
    e.addLootTableModifier('minecraft:chests/illager_mansion/map_chest').addLoot('endrem:magical_eye')
    e.addLootTableModifier('nova_structures:chests/stray_fort_tresure').addLoot('endrem:cold_eye')
    e.addLootTableModifier('betterjungletemples:chests/campsite').randomChance(0.1).addLoot('mythicupgrades:peridot_upgrade_smithing_template')
    let desertTempleLootTables = [
        "betterdeserttemples:chests/food_storage",
        "betterdeserttemples:chests/lab",
        "betterdeserttemples:chests/library",
        "betterdeserttemples:chests/statue",
        "betterdeserttemples:chests/storage",
        "betterdeserttemples:chests/tomb",
        "betterdeserttemples:chests/tomb_pharaoh",
        "betterdeserttemples:chests/wardrobe"
    ].forEach((lootTable) => {
        e.addLootTableModifier(lootTable).randomChance(0.0333).addLoot('mythicupgrades:topaz_upgrade_smithing_template')
    })
    e.addLootTableModifier('minecraft:chests/bastion_treasure').removeLoot('plentyofarmors:stardusite_ingot')
    e.addLootTableModifier('minecraft:chests/underwater_ruin_big').removeLoot('plentyofarmors:marine_diamond')
    e.addLootTableModifier('minecraft:chests/underwater_ruin_small').removeLoot('plentyofarmors:marine_diamond')

    e.addLootTableModifier(/betterstrongholds:chests\/(mess)/)
        .replaceLoot('minecraft:carrot', true)
        .addWeightedLoot([15, 30], [
            Item.of('farm_and_charm:corn').withChance(2),
            Item.of('farmersdelight:rice').withChance(2),
            Item.of('farmersdelight:tomato').withChance(2),
            Item.of('farmersdelight:cabbage').withChance(2),
            Item.of('farmersdelight:onion').withChance(2),
            Item.of('farmersdelight:raw_pasta').withChance(2),
            Item.of('farmersdelight:sweet_berry_cookie').withChance(1),
            Item.of('farmersdelight:honey_cookie').withChance(1),
            Item.of('farmersdelight:pumpkin_slice').withChance(2),
            Item.of('xtraarrows:bat_skin').withChance(2),
        ])
        .addAlternativesLoot(
            LootEntry.of('farmersdelight:fruit_salad').when(c => c.randomChance(0.1)),
            LootEntry.of('farmersdelight:pasta_with_meatballs').when(c => c.randomChance(0.1)),
            LootEntry.of('farmersdelight:pasta_with_mutton_chop').when(c => c.randomChance(0.1)),
            LootEntry.of('farmersdelight:vegetable_noodles').when(c => c.randomChance(0.1)),
            LootEntry.of('farmersdelight:ratatouille').when(c => c.randomChance(0.1)),
            LootEntry.of('farmersdelight:bacon_and_eggs').when(c => c.randomChance(0.1)),
            LootEntry.of('farmersdelight:fried_rice').when(c => c.randomChance(0.1)),
        )

    function strawFromGrass(block, chance) {
        e.addBlockLootModifier(block)
            .matchMainHand(Ingredient.of('#farmersdelight:straw_harvesters'))
            .randomChance(chance)
            .addLoot('farmersdelight:straw')
    }

    strawFromGrass('regions_unexplored:medium_grass', 0.2)
    strawFromGrass('regions_unexplored:steppe_grass', 0.2)
    strawFromGrass('regions_unexplored:tall_steppe_grass', 0.2)
    strawFromGrass('regions_unexplored:sandy_grass', 0.2)
    strawFromGrass('regions_unexplored:tall_sandy_grass', 0.2)
})