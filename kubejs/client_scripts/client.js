JEIEvents.hideItems(e => {
    e.hide(global.fullRemovals)
})

JEIEvents.removeCategories(e => {
    e.remove([
        'bclib:alloying'
    ])
})

EMIEvents.hideItems(e => {
    e.hide(global.fullRemovals)
})

EMIEvents.removeCategories(e => {
    e.remove([
        'bclib:alloying'
    ])
})