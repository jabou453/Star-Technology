ServerEvents.recipes(event => {
    const id = global.id;

    [
        'gtceu:assembly_line/wetware_super_computer_uv','gtceu:research_station/1_x_gtceu_wetware_processor_assembly',
        'gtceu:assembly_line/wetware_mainframe_uhv', 'gtceu:research_station/1_x_gtceu_wetware_processor_computer'
    ].forEach( idRemoved => {
    event.remove({ id: idRemoved });
    });

    event.recipes.gtceu.assembly_line(id('wetware_processor_computer'))
        .itemInputs('gtceu:wetware_printed_circuit_board', '2x gtceu:wetware_processor_assembly', '8x gtceu:advanced_smd_diode', '16x gtceu:nor_memory_chip',
            '32x gtceu:ram_chip', '24x gtceu:fine_yttrium_barium_cuprate_wire', '32x gtceu:polybenzimidazole_foil', '4x gtceu:europium_plate')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:wetware_processor_computer')
        .duration(600)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack('gtceu:wetware_processor_assembly')
                .EUt(30720)
                .CWUt(16)
        )
        .EUt(38400);

    event.recipes.gtceu.assembly_line(id('wetware_mainframe'))
        .itemInputs('2x gtceu:tritanium_frame', '2x gtceu:wetware_processor_computer', '32x gtceu:advanced_smd_diode', '32x gtceu:advanced_smd_capacitor',
            '32x gtceu:advanced_smd_transistor', '32x gtceu:advanced_smd_resistor', '32x gtceu:advanced_smd_inductor', '64x gtceu:polybenzimidazole_foil',
            '32x gtceu:ram_chip', '16x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire', '8x gtceu:europium_plate')
        .inputFluids('gtceu:soldering_alloy 2880', 'gtceu:polybenzimidazole 1152')
        .itemOutputs('gtceu:wetware_processor_mainframe')
        .duration(1500)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack('gtceu:wetware_processor_computer')
                .EUt(491520)
                .CWUt(96)
        )
        .EUt(300000);
    
    event.recipes.gtceu.assembly_line(id('wetware_based_runic_neuroloom'))
        .itemInputs('3x gtceu:ancient_runicalium_frame', '3x gtceu:wetware_processor_mainframe', '64x gtceu:advanced_smd_diode', '64x gtceu:advanced_smd_capacitor', '64x gtceu:advanced_smd_transistor',
            '64x gtceu:advanced_smd_resistor', '64x gtceu:advanced_smd_inductor', '64x gtceu:polyether_ether_ketone_foil', '64x gtceu:polyether_ether_ketone_foil', '32x kubejs:qram_chip', 
            '24x gtceu:ruthenium_trinium_americium_neutronate_double_wire', '12x gtceu:tritanium_plate')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 5760', 'gtceu:polyether_ether_ketone 2304', 'gtceu:sterilized_growth_medium 5000')
        .itemOutputs('kubejs:wetware_based_runic_neuroloom')
        .duration(1600)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack('kubejs:computational_super_matrix')
                .EUt(GTValues.VHA[GTValues.UHV])
                .CWUt(160)
        )
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.chemical_reactor(id('uepic_wafer'))
        .itemInputs('gtceu:uhpic_wafer','4x gtceu:silicon_carbide_over_bismuth_tritelluride_dust')
        .inputFluids('gtceu:neutronium 576')
        .itemOutputs('kubejs:uepic_wafer')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter(id('uepic_chip'))
        .itemInputs('kubejs:uepic_wafer')
        .itemOutputs('2x kubejs:uepic_chip')
        .duration(900)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.draco_infusion(id('uipic_wafer'))
        .itemInputs('kubejs:uepic_wafer','4x gtceu:silicon_carbide_over_bismuth_tritelluride_dust', '2x kubejs:draconic_stem_cells','2x kubejs:draconic_stem_cells',
             '4x gtceu:silicon_carbide_over_bismuth_tritelluride_dust','4x gtceu:silicon_carbide_over_bismuth_tritelluride_dust', '2x kubejs:draconic_stem_cells')
        .inputFluids('gtceu:pure_dragon_breath 8000')
        .itemOutputs('kubejs:uipic_wafer')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.cutter(id('uipic_chip'))
        .itemInputs('kubejs:uipic_wafer')
        .itemOutputs('2x kubejs:uipic_chip')
        .duration(900)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.cutter(id('draco_soc'))
        .itemInputs('kubejs:draco_advanced_soc_wafer')
        .itemOutputs('6x kubejs:draco_advanced_soc')
        .duration(1800)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.cutter(id('draco_wafer'))
        .itemInputs('kubejs:draco_boule')
        .itemOutputs('64x kubejs:draco_wafer', '64x kubejs:draco_wafer')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.circuit_assembler(id('3d_nand_chip'))
        .itemInputs('64x gtceu:nand_memory_chip', '12x gtceu:cerium_tritelluride_bolt', '2x #gtceu:circuits/iv')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 216')
        .itemOutputs('6x kubejs:3d_nand_chip')
        .duration(600)
        .EUt(GTValues.VA[GTValues.ZPM])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.circuit_assembler(id('3d_nor_chip'))
        .itemInputs('64x gtceu:nor_memory_chip', '12x gtceu:cerium_tritelluride_bolt', '2x #gtceu:circuits/iv')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 216')
        .itemOutputs('6x kubejs:3d_nor_chip')
        .duration(600)
        .EUt(GTValues.VA[GTValues.ZPM])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.chemical_reactor(id('qram'))
        .itemInputs('gtceu:ram_wafer','2x gtceu:silicon_carbide_over_bismuth_tritelluride_dust')
        .inputFluids('gtceu:radon 250')
        .itemOutputs('kubejs:qram_wafer')
        .duration(1500)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.cutter(id('qram_chip'))
        .itemInputs('kubejs:qram_wafer')
        .itemOutputs('12x kubejs:qram_chip')
        .duration(900)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    const DracoWaferEngraving = (ModID, Output, WaferTier, Lens, LensIsTag) => {
        const WaferDuration = {
            Silicon: 10,
            Phosphorous: 25,
            Naquadah: 100,
            Neutronium: 250,
            Draconic: 1000
        }
        const WaferQuantity = {
            Silicon: 64,
            Phosphorous: 32,
            Naquadah: 8,
            Neutronium: 4,
            Draconic: 1
        }

        const Duration = WaferDuration[WaferTier];
        const Quantity = WaferQuantity[WaferTier];

        if(LensIsTag == true)
        event.recipes.gtceu.laser_engraver(id(`engrave_${Output}_draconic`))
            .itemInputs('kubejs:draco_wafer')
            .notConsumable(`#forge:lenses/${Lens}`)
            .itemOutputs(`${Quantity}x ${ModID}:${Output}_wafer`)
            .duration(Duration)
            .EUt(GTValues.VA[GTValues.UV])
            .cleanroom(CleanroomType.CLEANROOM);
        else
        event.recipes.gtceu.laser_engraver(id(`engrave_${Output}_draconic`))
            .itemInputs('kubejs:draco_wafer')
            .notConsumable(`gtceu:${Lens}_lens`)
            .itemOutputs(`${Quantity}x ${ModID}:${Output}_wafer`)
            .duration(Duration)
            .EUt(GTValues.VA[GTValues.UV])
            .cleanroom(CleanroomType.CLEANROOM);
    
    }

    DracoWaferEngraving('gtceu', 'cpu', 'Silicon', 'light_blue', true);
    DracoWaferEngraving('gtceu', 'ram', 'Silicon', 'green', true);
    DracoWaferEngraving('gtceu', 'ilc', 'Silicon', 'red', true);
    DracoWaferEngraving('gtceu', 'simple_soc', 'Silicon', 'cyan_glass', false);
    DracoWaferEngraving('gtceu', 'soc', 'Phosphorous', 'yellow_glass', false);
    DracoWaferEngraving('gtceu', 'advanced_soc', 'Naquadah', 'purple', true);
    DracoWaferEngraving('gtceu', 'highly_advanced_soc', 'Neutronium', 'black_glass', false);
    DracoWaferEngraving('gtceu', 'nand_memory', 'Phosphorous', 'gray_glass', false);
    DracoWaferEngraving('gtceu', 'nor_memory', 'Phosphorous', 'pink_glass', false);
    DracoWaferEngraving('gtceu', 'ulpic', 'Silicon', 'blue', true);
    DracoWaferEngraving('gtceu', 'lpic', 'Silicon', 'orange_glass', false);
    DracoWaferEngraving('gtceu', 'mpic', 'Phosphorous', 'brown_glass', false);
    DracoWaferEngraving('kubejs', 'draco_advanced_soc', 'Draconic', 'echo_shard', false);

});