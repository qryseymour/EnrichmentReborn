ServerEvents.highPriorityData(e => {

    // feline nightvision fix
    e.addJson('origin:powers/cat_vision.json', {
        loading_priority: 10,
        type: 'origins:active_self',
        key: { key: 'key.origins.primary_active' },
        entity_action: {
            type: 'origins:if_else',
            condition: {
                type: 'origins:status_effect',
                effect: 'minecraft:night_vision'
            },
            if_action: {
                type: 'origins:clear_effect',
                effect: 'minecraft:night_vision',
            },
            else_action: {
                type: 'origins:apply_effect',
                effect: {
                    effect: 'minecraft:night_vision',
                    duration: 2147483646,
                    is_ambient: true,
                    show_particles: false,
                    show_icon: false
                }
            }
        }
    })

    // carnivore fix
    e.addJson('origins:powers/carnivore.json', {
        loading_priority: 10,
        type: 'origins:prevent_item_use',
        item_condition: {
            type: 'origins:and',
            conditions: [
                {
                    type: 'origins:or',
                    inverted: true,
                    conditions: [
                        {
                            type: 'origins:ingredient',
                            ingredient: { tag: 'kubejs:meat' }
                        },
                        { type: 'origins:meat' }
                    ],
                },
                { type: 'origins:food' },
                {
                    type: 'origins:ingredient',
                    inverted: true,
                    ingredient: { tag: 'origins:ignore_diet' },
                }
            ]
        }
    })

    // hotblooded buff
    e.addJson('origins:powers/hotblooded.json', {
        loading_priority: 10,
        type: 'origins:effect_immunity',
        effects: [
            'minecraft:poison',
            'minecraft:hunger',
            'minecraft:nausea'
        ],
        name: 'Hotblooded',
        description: 'Due to your hot body, venoms burn up, making you immune to poison, hunger, and nausea status effects.'
    })

    // launch into air change
    e.addJson('origins:powers/launch_into_air.json', {
        loading_priority: 10,
        type: 'origins:active_self',
        cooldown: 600,
        hud_render: {
            sprite_location: 'origins:textures/gui/resource_bar.png',
            bar_index: 4
        },
        entity_action: {
            type: 'origins:and',
            actions: [
            {
                type: 'origins:add_velocity',
                x: 0,
                y: 0.2,
                z: 1.1,
                space: 'local'
            },
            {
                type: 'origins:play_sound',
                sound: 'minecraft:entity.parrot.fly',
                volume: 2,
                pitch: 1
            },
            {
                type: 'origins:play_sound',
                sound: 'minecraft:entity.blaze.shoot',
                volume: 0.2,
                pitch: 2
            },
            {
                type: 'origins:delay',
                ticks: 5,
                action: {
                    type: 'origins:play_sound',
                    sound: 'minecraft:entity.parrot.fly',
                    volume: 2,
                    pitch: 0.7
                }
            },
            {
                type: 'origins:execute_command',
                command: 'particle minecraft:poof ~ ~ ~ 0.6 0.02 0.6 0.1 10'
            }
            ]
        },
        key: {
            key: 'key.origins.primary_active',
            continuous: true
        }
    })

    // throw ender pearl nerf
    e.addJson('origins:powers/throw_ender_pearl.json', {
        loading_priority: 10,
        type: 'origins:fire_projectile',
        cooldown: 60,
        hud_render: {
          sprite_location: 'origins:textures/gui/resource_bar.png',
          bar_index: 6
        },
        entity_type: 'origins:enderian_pearl',
        sound: 'minecraft:entity.ender_pearl.throw',
        speed: 1.5,
        divergence: 1,
        key: {
          key: 'key.origins.primary_active',
          continuous: false
        }
    })

    // water vulnerability buff
    e.addJson('origins:powers/water_vulnerability.json', {
        loading_priority: 10,
        loading_priority: 10,
        type: 'origins:damage_over_time',
        interval: 20,
        onset_delay: 1,
        damage: 2,
        damage_easy: 1,
        damage_source: {
          name: 'hurt_by_water',
          unblockable: true,
          bypasses_armor: true
        },
        protection_enchantment: 'origins:water_protection',
        protection_effectiveness: 1.0,
        condition: {
          type: 'origins:and',
          conditions: [
            {
              inverted: true,
              type: 'origins:block_in_radius',
              block_condition: {
                type: 'origins:block',
                block: 'minecraft:conduit'
              },
              radius: '20',
              shape: 'cube',
              comparison: '>=',
              compare_to: 1
            },
            {
              type: 'origins:status_effect',
              effect: 'minecraft:conduit_power',
              inverted: true
            },
            {
              type: 'origins:or',
              conditions: [
                {
                  type: 'origins:fluid_height',
                  fluid: 'minecraft:water',
                  comparison: '>',
                  compare_to: 0.0
                },
                {
                  type: 'origins:in_rain'
                }
              ]
            }
          ]
        }
    })

    // vegetarian fix
    e.addJson('origins:powers/vegetarian.json', {
        loading_priority: 10,
        type: 'origins:prevent_item_use',
        item_condition: {
            type: 'origins:and',
            conditions: [
                {
                    type: 'origins:or',
                    conditions: [
                        {
                            inverted: true,
                            type: 'origins:ingredient',
                            ingredient: { tag: 'kubejs:vegetarian' }
                        },
                        { type: 'origins:meat' }
                    ]
                },
                { type: 'origins:food' },
                {
                    type: 'origins:ingredient',
                    inverted: true,
                    ingredient: { tag: 'origins:ignore_diet' },
                }
            ]
        }
    })

    e.addJson('origins:origins/phantom.json', {
        loading_priority: 10,
        powers: [
            'origins:phantomize',
            'origins:translucent',
            'origins:phasing',
            'origins:invisibility',
            'origins:burn_in_daylight',
            'origins:hunger_over_time',
            'origins:fragile',
            'origins:phantomize_overlay',
            'custom_origins:phantom/suffocation_fix',
            'custom_origins:phantom/sleepless_brethren',
        ],
        icon: { item: 'minecraft:phantom_membrane' },
        order: 2,
        impact: 3
    })
    
    e.addJson('origins:origins/elytrian.json', {
        loading_priority: 10,
        powers: [
            'origins:elytra',
            'origins:launch_into_air',
            'origins:aerial_combatant',
            'origins:light_armor',
            'origins:claustrophobia',
            'origins:more_kinetic_damage',
            'custom_origins:elytrian/rideable'
        ],
        icon: {
            item: 'minecraft:elytra'
        },
        order: 3,
        impact: 1
    })
    
    e.addJson('origins:origins/blazeborn.json', {
        loading_priority: 10,
        powers: [
            'origins:fire_immunity',
            'origins:nether_spawn',
            'origins:burning_wrath',
            'origins:hotblooded',
            'origins:water_vulnerability',
            'origins:flame_particles',
            'origins:damage_from_snowballs',
            'origins:damage_from_potions',
            'custom_origins:blazeborn/lava_swim'
        ],
        icon: {
            item: 'minecraft:blaze_powder'
        },
        order: 1,
        impact: 3
    })
})
