const teleporters = [
    'minecraft:ender_pearl',
    'mutantmonsters:endersoul_hand',
    'bygonenether:warped_ender_pearl',
    'bosses_of_mass_destruction:charged_ender_pearl'
]

const projectileSwords = [
    'terra_armory:throwing_ice_sword',
    'terra_armory:throwing_fire_sword',
    'terra_armory:throwing_jungle_sword',
    'terra_armory:throwing_enchanted_sword'
]

const applyItemlistCooldown = (player, itemList, ticks) => {
    itemList.forEach((item) => {
        player.addItemCooldown(item, ticks)
    })
}

ItemEvents.rightClicked('minecraft:ender_pearl', e => {
    if (e.player.inWater) {
        e.cancel();
    } else {
        e.server.scheduleInTicks(0, (callback) => {
            applyItemlistCooldown(e.player, teleporters, 60)
        })
    }
})

ItemEvents.rightClicked('bygonenether:warped_ender_pearl', e => {
    if (e.player.inWater) {
        e.cancel();
    } else {
        e.server.scheduleInTicks(0, (callback) => {
            applyItemlistCooldown(e.player, teleporters, 60)
        })
    }
})

ItemEvents.rightClicked('bosses_of_mass_destruction:charged_ender_pearl', e => {
    if (e.player.inWater) {
        e.cancel();
    } else {
        e.server.scheduleInTicks(0, (callback) => {
            applyItemlistCooldown(e.player, teleporters, 180)
        })
    }
})

ItemEvents.rightClicked('mutantmonsters:endersoul_hand', e => {
    if (e.player.inWater) {
        e.cancel();
    }
    else if (e.player.isShiftKeyDown()) {
        e.server.scheduleInTicks(0, (callback) => {
            applyItemlistCooldown(e.player, teleporters, 120)
        })
    }
})

ItemEvents.foodEaten("bosses_of_mass_destruction:crystal_fruit", e => {
    e.player.potionEffects.add("minecraft:resistance", 600, 1, false, true)
    e.player.potionEffects.add("minecraft:regeneration", 300, 2, false, true)
})

projectileSwords.forEach((sword) => {
    ItemEvents.rightClicked(sword, e => {
        e.server.scheduleInTicks(0, (callback) => {
            applyItemlistCooldown(e.player, projectileSwords, 30)
        })
    })
})