//priority: 7
ServerEvents.recipes(e => {

    // Removes by recipe ID
    let idRemovals = [
        /betterend:additional_.*/,
        /regions_unexplored:stick_from(.*branch|.*beard)/,
        'betterend:thallasium_ingot_alloy',
        'betterend:terminite_ingot',
        'farmersdelight:bread_from_smelting',
        'farmersdelight:bread_from_smoking'
    ]

    idRemovals.forEach(removal => {
        e.remove({ id: removal })
    })

    // Removes inputs and outputs from global array fullRemoval
    global.fullRemovals.forEach(removal => {
        e.remove({ input: removal })
        e.remove({ output: removal })
    })

})