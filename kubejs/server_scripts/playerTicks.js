const bonuses = [
    {
      armors: ['mythicupgrades:ruby_helmet', 'mythicupgrades:ruby_chestplate', 'mythicupgrades:ruby_leggings', 'mythicupgrades:ruby_boots'],
      bonus: [
          ['mythicupgrades:spelunker', 1]
      ]
    },
    {
      armors: ['mythicupgrades:topaz_helmet', 'mythicupgrades:topaz_chestplate', 'mythicupgrades:topaz_leggings', 'mythicupgrades:topaz_boots'],
      bonus: [
          ['mythicupgrades:item_mastery', 0]
      ]
    },
    {
      armors: ['mythicupgrades:peridot_helmet', 'mythicupgrades:peridot_chestplate', 'mythicupgrades:peridot_leggings', 'mythicupgrades:peridot_boots'],
      bonus: [
          ['mythicupgrades:poisonous_thorns', -3]
      ]
    },
    {
      armors: ['mythicupgrades:jade_helmet', 'mythicupgrades:jade_chestplate', 'mythicupgrades:jade_leggings', 'mythicupgrades:jade_boots'],
      bonus: [
          ['minecraft:speed', -2],
          ['minecraft:jump_boost', -2]
      ]
    },
    {
      armors: ['mythicupgrades:aquamarine_helmet', 'mythicupgrades:aquamarine_chestplate', 'mythicupgrades:aquamarine_leggings', 'mythicupgrades:aquamarine_boots'],
      bonus: [
          ['mythicupgrades:ice_shield', -2]
      ]
    },
    {
      armors: ['mythicupgrades:sapphire_helmet', 'mythicupgrades:sapphire_chestplate', 'mythicupgrades:sapphire_leggings', 'mythicupgrades:sapphire_boots'],
      bonus: [
          ['mythicupgrades:damage_deflection', -2]
      ]
    },
    {
      armors: ['mythicupgrades:ametrine_helmet', 'mythicupgrades:ametrine_chestplate', 'mythicupgrades:ametrine_leggings', 'mythicupgrades:ametrine_boots'],
      bonus: [
          ['mythicupgrades:arcane_aura', -2]
      ]
    },
    {
      armors: ['enva:titanium_helmet', 'enva:titanium_chestplate', 'enva:titanium_leggings', 'enva:titanium_boots'],
      bonus: [
          ['enva:water_resistance', -4],
          ['enva:sunscreen', -4],
      ]
    }
];

PlayerEvents.tick(event => {
    const { player } = event;

    // Fires event once a second
    if (!(player.age % 10 === 0)) {
        return
    }
    var seenCredits = player.nbt.seenCredits
    if ((seenCredits || seenCredits == 1 || seenCredits == "1b") && !player.stages.has('gotHardCatalyst')) {
      player.stages.add('gotHardCatalyst')
      player.give("things:hardening_catalyst")
    }
    let potion = event.player.potionEffects
    if (player.headArmorItem?.id == "mutantmonsters:mutant_skeleton_skull") {
      potion.add("minecraft:night_vision", 300, 0, true, false)
      potion.add("minecraft:water_breathing", 100, 0, true, false)
    }
    if (player.chestArmorItem?.id == "mutantmonsters:mutant_skeleton_chestplate") {
      potion.add("minecraft:haste", 100, 0, true, false)
    }
    bonuses.forEach((set) => {
        var count = 0
        count += (player.headArmorItem?.id == set.armors[0] ? 1 : 0)
        count += (player.chestArmorItem?.id == set.armors[1] ? 1 : 0)
        count += (player.legsArmorItem?.id == set.armors[2] ? 1 : 0)
        count += (player.feetArmorItem?.id == set.armors[3] ? 1 : 0)
        if (count > 0) {
            set.bonus.forEach((effects) => {
                if (effects[1] + count >= 0) {
                    potion.add(effects[0], 30, effects[1] + count, true, false)
                }
            })
        }
    })
});