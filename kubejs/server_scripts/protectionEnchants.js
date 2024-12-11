let endMonsters = [
    "minecraft:phantom",
    "minecraft:blaze",
    "minecraft:ghast",
    "minecraft:shulker",
    "minecraft:vex",
    "bygonenether:wex",
    "dungeonnowloading:hollow",
    "minecraft:witch",
    "minecraft:stray",
    "enderzoology:fallen_knight",
    "enderzoology:wither_witch",
    "mutantmonsters:mutant_creeper",
    "mutantmonsters:creeper_minion",
    "mutantmonsters:mutant_skeleton",
    "variantsandventures:murk",
    "variantsandventures:verdant",
    "minecraft:zombie",
    "minecraft:skeleton",
    "minecraft:enderman",
    "minecraft:husk",
    "minecraft:drowned",
    "minecraft:spider",
    "minecraft:cave_spider",
    "minecraft:creeper",
    "minecraft:ravager",
    "minecraft:wither",
    "minecraft:vindicator",
    "minecraft:wither_skeleton",
    "bygonenether:warped_enderman",
    "bygonenether:wraither",
    "bygonenether:corpor",
    "bygonenether:wither_skeleton_knight",
    "dungeonnowloading:spawner_carrier",
    "enderzoology:concussion_creeper",
    "enderzoology:infested_zombie",
    "enderzoology:enderminy",
    "mutantmonsters:mutant_zombie",
    "mutantmonsters:mutant_enderman",
    "spider_caves:black_recluse",
    "minecraft:ender_dragon",
    "minecraft:end_crystal",
    "bosses_of_mass_destruction:obsidilith"
  ]

EntityEvents.hurt(event => {
    const victim = event.entity;
    const attacker = event.source.actual;
    var health = victim.health
    var maxHealth = victim.getAttributeTotalValue("generic.max_health")
    var armor = victim.getAttributeTotalValue("generic.armor") > 20 ? 40 - victim.getAttributeTotalValue("generic.armor") : victim.getAttributeTotalValue("generic.armor")
    var armorToughness = victim.getAttributeTotalValue("generic.armor_toughness") > 16 ? 32 - victim.getAttributeTotalValue("generic.armor") : victim.getAttributeTotalValue("generic.armor_toughness")
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
        "inWall",
        "falling_stalactite",
        "fallingStalactite",
        "stalagmite",
        "sweet_berry_bush",
        "sweetBerryBush"
    ].includes(event.source.getType())) {
        victim.heal(event.damage * Math.min(0.08 * elementalProtectionCount, 80))
    }


    if ([
        "fly_into_wall",
        "sonic_boom",
        "sonicBoom",
        "lightning_bolt",
        "lightningBolt",
        "wither",
        "ender_pearl",
        "enderPearl",
        "sting",
        "starve",
        "botania.key_explosion"
    ].includes(event.source.getType())) {
        victim.heal(event.damage * Math.min(0.08 * ruptureProtectionCount, 80))
    }


    if ([
        "arrow",
        "fireball",
        "spit",
        "mob_projectile",
        "mobProjectile",
        "trident",
        "wither_skull",
        "witherSkull"
    ].includes(event.source.getType())) {
        if (attacker.getType() == 'minecraft:player') {
            if ((15 * projectileProtectionCount) >= Math.floor(Math.random() * 101)) {
                event.cancel();
                attacker.playSound("minecraft:item.shield.block", 1, 1)
                const server = attacker.server
                const {x, y, z} = attacker.block;
                server.runCommandSilent(`playsound minecraft:item.shield.block player @p ${x} ${y} ${z}`);
            };
        }
    }


    if (ruptureProtectionCount > 0) {
        if(!attacker) return;
        victim.knockback(Math.max(0, 1 - (ruptureProtectionCount * 0.15)), victim.x-event.source.actual.x, victim.z-event.source.actual.z);
        victim.hurtMarked = true;
    }


    if (event.getLevel().getDimension() == 'minecraft:the_end') { 
        
        if (([
            "in_fire",
            "inFire",
            "on_fire",
            "onFire",
            "lightning_bolt",
            "lightningBolt",
            "fall",
        ].includes(event.source.getType()) || endMonsters.includes(attacker.getType())) && endMonsters.includes(victim.getType())) {
            event.cancel();
        } else if (event.source.getType() == "botania.key_explosion" && endMonsters.includes(victim.getType())) {
            victim.heal(event.damage * 0.9)
        }


        if (victim.getType() == "minecraft:player") {
            if (endMonsters.includes(attacker.getType()) && attacker.getType() != "minecraft:ender_dragon") {
                var multiplyFactor = maxHealth > 20 && health > 20 ? -1 : -0.35
                if ([
                    "in_fire",
                    "inFire",
                    "lava",
                    "on_fire",
                    "onFire",
                    "freeze",
                    "cactus",
                    "in_wall",
                    "inWall",
                    "falling_stalactite",
                    "fallingStalactite",
                    "stalagmite",
                    "sweet_berry_bush",
                    "sweetBerryBush"
                ].includes(event.source.getType())) {
                    armor = armor * Math.min(1, elementalProtectionCount / 4)
                    armorToughness = armorToughness * Math.min(1, elementalProtectionCount / 4)
                    victim.heal(event.damage * (multiplyFactor + (Math.min(20, Math.max(armor / 5, armor - (event.damage / (2 + (armorToughness / 4))))) / 25))  * (1 - Math.min(0.08 * elementalProtectionCount, 80)))
                }
                else if ([
                    "player_explosion",
                    "playerExplosion",
                    "bad_respawn_point",
                    "badRespawnPoint",
                    "explosion",
                    "fireworks",
                    "fly_into_wall",
                    "sonic_boom",
                    "sonicBoom",
                    "lightning_bolt",
                    "lightningBolt",
                    "wither",
                    "ender_pearl",
                    "enderPearl",
                    "sting",
                    "starve",
                    "botania.key_explosion"
                ].includes(event.source.getType() && !(["minecraft:creeper", "mutantmonsters:creeper_minion", "mutantmonsters:mutant_creeper", "minecraft:end_crystal"].includes(attacker.getType())))) {
                    armor = armor * Math.min(1, ruptureProtectionCount / 4)
                    armorToughness = armorToughness * Math.min(1, ruptureProtectionCount / 4)
                    victim.heal(event.damage * (multiplyFactor + (Math.min(20, Math.max(armor / 5, armor - (event.damage / (2 + (armorToughness / 4))))) / 25))  * (1 - Math.min(0.08 * ruptureProtectionCount, 80)))
                }
                else if ([
                    "arrow",
                    "fireball",
                    "spit",
                    "mob_projectile",
                    "mobProjectile",
                    "trident",
                    "wither_skull",
                    "witherSkull"
                ].includes(event.source.getType())) {
                    armor = armor * Math.min(1, projectileProtectionCount / 4)
                    armorToughness = armorToughness * Math.min(1, projectileProtectionCount / 4)
                    victim.heal(event.damage * (multiplyFactor + (Math.min(20, Math.max(armor / 5, armor - (event.damage / (2 + (armorToughness / 4))))) / 25))  * (1 - Math.min(0.08 * projectileProtectionCount, 80)))
                } else {
                    victim.heal(event.damage * (multiplyFactor + (Math.min(20, Math.max(armor / 5, armor - (event.damage / (2 + (armorToughness / 4))))) / 25)) * ((maxHealth - 20) / 20))
                }
                if (["minecraft:enderman", "mutantmonsters:mutant_enderman", "enderzoology:infested_zombie", "enderzoology:concussion_creeper"].includes(attacker.getType())) {
                    victim.potionEffects.add("mysticpotions:teleportation", 200, 0, false, true)
                    victim.potionEffects.add("mysticpotions:slippery", 200, 0, false, true)
                } else if (attacker.getType() == "minecraft:stray") {
                    victim.potionEffects.add("mysticpotions:slippery", 600, 0, false, true)
                }
            }
            
            if ([
                "player_explosion",
                "playerExplosion",
                "explosion",
                "explosion.player",
                "fireworks",
                "lightning_bolt",
                "lightningBolt"
            ].includes(event.source.getType()) && ruptureProtectionCount < 4) {
                var powered = attacker.nbt.powered
                if (((attacker.getType() == "minecraft:creeper" && (powered || powered == 1 || powered == "1b")) || attacker.getType() == "mutantmonsters:mutant_creeper") && health > 1) {
                    victim.heal(-1 * (health - 1) * (4 - ruptureProtectionCount) / 4)
                } else if ((attacker.getType() == "minecraft:creeper" || attacker.getType() == "mutantmonsters:creeper_minion" || attacker.getType() == "minecraft:end_crystal") && health > 20) {
                    victim.heal(-1 * (health - 20) * (4 - ruptureProtectionCount) / 4)
                }
            }
            if ([
                "bad_respawn_point",
                "badRespawnPoint"
            ].includes(event.source.getType()) && ruptureProtectionCount < 8) {
                victim.heal(-0.33 * maxHealth * (8 - ruptureProtectionCount) / 8)
            }
            if (event.source.getType() == "botania.key_explosion" && ruptureProtectionCount < 12) {
                victim.heal(-0.05 * maxHealth * (12 - ruptureProtectionCount) / 12)
            }
        }
    }
})