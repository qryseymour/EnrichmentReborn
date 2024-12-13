// priority: 1

// stuff that's fully removed
global.fullRemovals = [
    /betterend:(.*hammer|.*head|.*handle|.*blade|.*template|.*aeternium.*|elytra_armored)/,
    /betterend:thallasium_(shovel|sword|pickaxe|axe|hoe|forged_plate|helmet|chestplate|leggings|boots)/,
    /betterend:terminite_(shovel|sword|pickaxe|axe|hoe|forged_plate)/,
    'beautify:rope',
    'brewery:rope',
    'farmersdelight:wheat_dough',
    'waystones:warp_dust',
    'waystones:warp_plate',
    'waystones:return_scroll',
    'waystones:bound_scroll',
    /waystones:.*sharestone/,
    'waystones:portstone',
    'things:ender_pouch',
    'camping:enderpack',
    'camping:enderbag',
    "terraqueous:ender_table",
    "terraqueous:ender_dust",
    "bygonenether:gilded_netherite_shield",
    "new_soviet:sickle",
    "snowballs_plus:healthy_heart",
    "snowballs_plus:bloodthirsty_heart",
    "things:diamond_pressure_plate",
    "enva:glass_bowl",
    "enva:water_glass_bowl",
    "yummyglass:glass_shard",
    /enva:.*glass_helmet/,
    /new_shield_variants:(stone|iron|gold|diamond|tnt|ender)_shield/,
    /camping:(large|wanderer|sheep|goody)(|_)(backpack|bag)/,
    "botania:terra_sword",
    "botania:star_sword",
    "botania:ender_hand",
    "botania:itemfinder",
    "botania:flight_tiara",
    /plentyofarmors:(slime|emerald)_(helmet|chestplate|leggings|boots)/,
    "botania:laputa_shard",
    "botania:aura_ring",
    "botania:aura_ring_greater",
    "botania:rosa_arcana",
    /end_reborn:(end_stone|popped_chorus)_(sword|axe|pickaxe|hoe|shovel)/,
    /end_reborn:(gilded|reinforced|forgotten|fractured|sculk|lost)_steel.*/,
    "zenith:gem",
    "zenith:gem_cutting_table"
]

ItemEvents.modification(event => {
    event.modify('botania:thorn_chakram', item => {
        item.maxStackSize = 4;
    })
    event.modify('botania:flare_chakram', item => {
        item.maxStackSize = 4;
    })

    // x2 durability
    event.modify(/(.*diamond.*|armoroftheages:(quetzalcoatl_armor_(head|chest|legs)|raijin_armor_(head|feet)|anubis.*|holy_armor_(head|feet)|o_yoroi.*|iron_plate_armor_(chest|legs)))/, item => {
        item.setMaxDamage(item.maxDamage * 2)
    })

    // x4 durability
    event.modify(/(armoroftheages:(centurion.*|quetzalcoatl_armor_feet|raijin_armor_(chest|legs)|anubis_armor_chest))/, item => {
        item.setMaxDamage(item.maxDamage * 4)
    })

    // x8 durability
    event.modify(/(armoroftheages:(holy_armor_(chest|legs))|mythicupgrades:.*)/, item => {
        item.setMaxDamage(item.maxDamage * 8)
    })

    // x45 durability
    event.modify(/(.*netherite.*|fantasy_armor:.*|stardusite.*))/, item => {
        item.setMaxDamage(item.maxDamage * 45)
    })
})