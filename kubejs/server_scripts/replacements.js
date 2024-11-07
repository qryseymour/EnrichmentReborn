// priority: 8
let replacements = [
    ["betterend:terminite_forged_plate", "betterend:terminite_ingot"],
    ["farmersdelight:wheat_dough", "create:dough"],
    ["farm_and_charm:dough", "create:dough"],
    ["beautify:rope", "farmersdelight:rope"],
    ["brewery:rope", "farmersdelight:rope"],
    ["terraqueous:ender_dust", "betterend:ender_dust"],
    ["new_soviet:sickle", "terraqueous:scythe"],
    ["yummyglass:glass_shard", "terraqueous:doodad_glassshards"]
]

ServerEvents.recipes(e => { 
    replacements.forEach((replacing) => {
        e.replaceInput({}, replacing[0], replacing[1])
        e.replaceOutput({}, replacing[0], replacing[1])
    })
    let recipeReplacements = [
        ["minecraft:milk_bucket", "#c:milk", {}],
        ["minecraft:egg", "#kubejs:egg", {}],
        ["minecraft:chest", "#c:wooden_chests", {}],
        ["minecraft:lead", "farmersdelight:rope", {}],
        ["minecraft:ender_pearl", "minecraft:ender_eye", { mod: 'waystones'}],
        ["minecraft:purple_dye", "minecraft:purpur_block", { mod: 'waystones'}],
        ["minecraft:emerald", "betterend:eternal_crystal", { id: 'waystones:warp_stone'}],
        ["minecraft:leather", "minecraft:bundle", { id: "camping:small_backpack" }],
        ["minecraft:potion", "projectiles:dynamite", { id: "dungeonsnowloading:explosive_barrel" }],
        ["minecraft:bone", "minecraft:goat_horn", { id: "immersive_armors:warrior_helmet" }],
        ["minecraft:iron_ingot", "minecraft:iron_block", { id: /immersive_armors:heavy_(boots|leggings|chestplate|helmet)/ }],
        ["enva:glass_bowl", "minecraft:turtle_helmet", { id: "enva:titanium_coated_glass_bowl" }]
    ].forEach((replacing) => {
        e.replaceInput(replacing[2], replacing[0], replacing[1])
    })
})

// ⚠️ LOOT TABLES ⚠️
LootJS.modifiers(e => {
    replacements.forEach((replacing) => {
        // replace in all loot tables
        e.addLootTableModifier(/.*/)
            .replaceLoot(replacing[0], replacing[1], true)
    })
})