ServerEvents.highPriorityData(e => {
    e.addJson('beautify:advancements/progression/candelabra.json', {
        display: {
            icon: { item: 'beautify:lamp_candelabra' },
            title: 'Wicked!',
            description: 'Craft a candelabra',
            frame: 'task',
            show_toast: true,
            announce_to_chat: true,
            hidden: false
        },
        parent: 'beautify:progression/root',
        criteria: {
            obtain: {
                trigger: 'minecraft:inventory_changed',
                conditions: { items: [{ items: ['beautify:lamp_candelabra'] }] }
            }
        }
    })
})