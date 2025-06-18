StartupEvents.registry('item', event => {

    event.create('naquadic_netherite_fibers')
        .texture('kubejs:item/naquadic_netherite_fibers')
        .rarity('rare')
        .tooltip('The strongest armor material');

    event.create('coin')
        .displayName('StarT Coin')
        .rarity('EPIC')
        .tooltip('§7Spend these coins in the store chapter of the questbook')
        .texture('kubejs:item/coin');

    event.create('multiblock_upgrade_kit')
        .displayName('Multiblock Upgrade Kit')
        .texture('kubejs:item/kits/upgrade_kit')
        .tooltip('§7Used to upgrade some HV machines into multiblocks capable of §6Perfect Overclock');
        
    event.create('draconic_stem_cells')
        .displayName('Draconic Stem Cells')
        .texture('kubejs:item/draconic/draconic_stem_cells');

    event.create('lactating_draconic_cells')
        .displayName('Lactating Draconic Cells')
        .texture('kubejs:item/draconic/lactating_draconic_cells');

    event.create('draconic_brain_matter_cells')
        .displayName('Draconic Brain Matter Cells')
        .texture('kubejs:item/draconic/draconic_brain_matter_cells');

    event.create('draconic_scale_cells')
        .displayName('Draconic Scale Cells')
        .texture('kubejs:item/draconic/draconic_scale_cells');

});