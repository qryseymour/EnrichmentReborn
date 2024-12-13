ClientEvents.lang('en_us', e => {
    function rename(id, name) {
        if (Item.of(id).isBlock()) e.renameBlock(id, name)
        else e.renameItem(id, name)
    }
    // beautify
    rename('beautify:oak_trellis', 'Oak Floral Lattice')
	rename('beautify:spruce_trellis', 'Spruce Floral Lattice')
	rename('beautify:birch_trellis', 'Birch Floral Lattice')
	rename('beautify:jungle_trellis', 'Jungle Floral Lattice')
	rename('beautify:acacia_trellis', 'Acacia Floral Lattice')
	rename('beautify:dark_oak_trellis', 'Dark Oak Floral Lattice')
	rename('beautify:mangrove_trellis', 'Mangrove Floral Lattice')
	rename('beautify:crimson_trellis', 'Crimson Floral Lattice')
	rename('beautify:warped_trellis', 'Warped Floral Lattice')
})