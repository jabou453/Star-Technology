ItemEvents.tooltip(event => {
    
    event.addAdvanced('gtceu:large_chemical_reactor', (item, advanced, text) => {
        text.add(2, Text.of('Has §6Perfect Overclock§r and §cSubtick Parallels'));
    });
    
    event.addAdvanced('gtceu:implosion_compressor', (item, advanced, text) => {
        text.add(2, Text.of('Has §cSubtick Parallels'));
    });
    
    event.addAdvanced('gtceu:distillation_tower', (item, advanced, text) => {
        text.add(2, Text.of('Has §cSubtick Parallels'));
    });
    
    event.addAdvanced('gtceu:vacuum_freezer', (item, advanced, text) => {
        text.add(2, Text.of('Has §cSubtick Parallels'));
    });
    
    event.addAdvanced('gtceu:assembly_line', (item, advanced, text) => {
        text.add(2, Text.of('Has §cSubtick Parallels'));
    });

    event.addAdvanced('gtceu:multi_smelter', (item, advanced, text) => {
        text.add(2, Text.of('Has §cSubtick Parallels§r and §bCoil Parallels§r'));
    });

    event.addAdvanced(/gtceu:.*_macerator/, (item, advanced, text) => {
        text.add(1, Text.of('§7Macerators only produce byproducts shown in JEI at HV or higher'));
    });

    event.addAdvanced('gtceu:ulv_fluid_input', (item, advanced, text) => {
        text.add(1, Text.of('Fluid Input for Primitive Multiblocks'))
        text.add(2, Text.of('§9Fluid Capacity:§r 2,000 mB'));
    });

});