
StartupEvents.registry('item', event => {

    const chipBoule = (boule, color, doped) => {
        if (doped) {
            event.create(`${boule.toLowerCase()}_chip`)
                .displayName(`${color}${boule}§r-Doped Chip`)
                .texture(`kubejs:item/chips_n_wafers/empty_${boule.toLowerCase()}_chip`);
        } else {
            event.create(`${boule.toLowerCase()}_chip`)
                .displayName(`${color}${boule}§r Chip`)
                .texture(`kubejs:item/chips_n_wafers/empty_${boule.toLowerCase()}_chip`);
        };
    };

    chipBoule('Silicon', '§r', false)
    chipBoule('Phosphorus', '§r', true)
    chipBoule('Naquadah', '§r', true)
    chipBoule('Neutronium', '§r', true)
    chipBoule('Draco', '§5', true)

    event.create('ae2_soc_wafer')
        .displayName('AE2 SoC Wafer')
        .texture('kubejs:item/chips_n_wafers/ae2_soc_wafer');

    event.create('ae2_soc')
        .displayName('AE2 SoC')
        .texture('kubejs:item/chips_n_wafers/ae2_soc_chip');

    event.create('3d_nand_chip')
        .displayName('3D-NAND Memory Chip Array')
        .tooltip('§7Complex NAND Logic Gate')
        .texture('kubejs:item/chips_n_wafers/3d_nand');

    event.create('3d_nor_chip')
        .displayName('3D-NOR Memory Chip Array')
        .tooltip('§7Complex NOR Logic Gate')
        .texture('kubejs:item/chips_n_wafers/3d_nor');

    event.create('qram_wafer')
        .displayName('qRAM Wafer')
        .tooltip('§7Raw Quantum Memory')
        .texture('kubejs:item/chips_n_wafers/qram_wafer');

    event.create('qram_chip')
        .displayName('qRAM Chip')
        .tooltip('§7Quantum Random Access Memory')
        .texture('kubejs:item/chips_n_wafers/qram_chip');

    event.create('uepic_wafer')
        .displayName('UEPIC Wafer')
        .tooltip('§7Raw Ultra Excessive Power Circuit')
        .texture('kubejs:item/chips_n_wafers/uepic_wafer');

    event.create('uepic_chip')
        .displayName('UEPIC Chip')
        .tooltip('§7Ultra Excessive Power IC')
        .texture('kubejs:item/chips_n_wafers/uepic_chip');


});