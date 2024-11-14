EntityEvents.hurt(event => {
    const victim = event.entity;
    var elementalProtectionCount = 0
    var ruptureProtectionCount = 0
    var projectileProtectionCount = 0

    let armorPieces = [
        victim.getHeadArmorItem(),
        victim.getChestArmorItem(),
        victim.getLegsArmorItem(),
        victim.getFeetArmorItem()
    ].forEach((piece) => {
        if (piece.id != "minecraft:air") {
            elementalProtectionCount += piece.getEnchantments().get('minecraft:fire_protection')
            ruptureProtectionCount += piece.getEnchantments().get('minecraft:blast_protection')
            projectileProtectionCount += piece.getEnchantments().get('minecraft:projectile_protection')
        }
    })
    if ([
        "freeze",
        "cactus",
        "in_wall",
        "falling_stalactite",
        "stalagmite",
        "sweet_berry_bush"
    ].includes(event.source.getType())) {
        victim.heal(event.damage * Math.min(0.08 * elementalProtectionCount, 80))
    }
    if ([
        "fly_into_wall",
        "sonic_boom",
        "sonicboom",
        "lightning_bolt",
        "wither",
        "ender_pearl",
        "sting",
        "starve"
    ].includes(event.source.getType())) {
        victim.heal(event.damage * Math.min(0.08 * ruptureProtectionCount, 80))
    }
    if ([
        "arrow",
        "fireball",
        "spit",
        "mob_projectile",
        "trident",
        "wither_skull"
    ].includes(event.source.getType())) {
        var player = event.source.actual;
        if (player.getType() == 'minecraft:player') {
            if ((15 * projectileProtectionCount) >= Math.floor(Math.random() * 101)) {
                event.cancel();
                player.playSound("minecraft:item.shield.block", 1, 1)
            };
        }
    }
    if (ruptureProtectionCount > 0) {
        if(!event.source.actual) return;
        victim.knockback(Math.max(0, 1 - (ruptureProtectionCount * 0.15)), victim.x-event.source.actual.x, victim.z-event.source.actual.z);
        victim.hurtMarked = true;
    }
})