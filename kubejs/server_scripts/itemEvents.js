const teleporters = [
    'minecraft:ender_pearl',
    'mutantmonsters:endersoul_hand',
    'bygonenether:warped_ender_pearl',
    'bosses_of_mass_destruction:charged_ender_pearl'
]

const applyItemlistCooldown = (player, itemList, ticks) => {
    itemList.forEach((item) => {
        player.addItemCooldown(item, ticks)
    })
}

ItemEvents.rightClicked('enva:glass_bowl', e => {
    e.cancel();
})

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

ItemEvents.rightClicked('botania:thorn_chakram', e => {
    e.server.scheduleInTicks(1, (callback) => {
        e.player.addItemCooldown('botania:thorn_chakram', 20)
        e.player.addItemCooldown('botania:flare_chakram', 20)
    })
})

ItemEvents.rightClicked('botania:flare_chakram', e => {
    e.server.scheduleInTicks(1, (callback) => {
        e.player.addItemCooldown('botania:thorn_chakram', 20)
        e.player.addItemCooldown('botania:flare_chakram', 20)
    })
})