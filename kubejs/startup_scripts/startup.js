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
    "botania:flight_tiara"
]

ItemEvents.modification(event => {
    event.modify('botania:thorn_chakram', item => {
        item.maxStackSize = 4;
    })
    event.modify('botania:flare_chakram', item => {
        item.maxStackSize = 4;
    })
})