
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

    event.create('draco_boule')
        .displayName('§5Draco§r-doped Neutronium-Silicate Boule')
        .tooltip('§7Raw Circuit')
        .texture('kubejs:item/chips_n_wafers/draco_boule');

    event.create('draco_wafer')
        .displayName('§5Draco§r-doped Wafer')
        .tooltip('§7Raw Circuit Wafer')
        .texture('kubejs:item/chips_n_wafers/draco_wafer');

    event.create('draco_advanced_soc_wafer')
        .displayName('§5Dr§rASoC Wafer')
        .tooltip('§7Raw Draconically Advanced Circuit')
        .texture('kubejs:item/chips_n_wafers/draco_advanced_soc_wafer');

    event.create('draco_advanced_soc')
        .displayName('§5Dr§rASoC')
        .tooltip('§7Draconically Advanced System on Chip')
        .texture('kubejs:item/chips_n_wafers/draco_advanced_soc');

    event.create('uipic_wafer')
        .displayName('UIPIC Wafer')
        .tooltip('§7Raw Ultra Immense Power Circuit')
        .texture('kubejs:item/chips_n_wafers/uipic_wafer');

    event.create('uipic_chip')
        .displayName('UIPIC Chip')
        .tooltip('§7Ultra Immense Power IC')
        .texture('kubejs:item/chips_n_wafers/uipic_chip');


});