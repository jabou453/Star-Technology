ServerEvents.recipes(event => {
    const id = global.id;

    // === Circuit Packs ===

    // event.recipes.gtceu.draco_circuit_assembler(id('ulv_pack'))
    //     .itemInputs('16x gtceu:nand_chip', '8x gtceu:simple_soc', '16x gtceu:fine_red_alloy_wire')
    //     .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 18')
    //     .itemOutputs('64x kubejs:ulv_universal_circuit')
    //     .duration(200)
    //     .CWUt(16)
    //     .EUt(GTValues.VHA[GTValues.EV]);

    // event.recipes.gtceu.draco_circuit_assembler(id('lv_pack'))
    //     .itemInputs('16x kubejs:ulv_universal_circuit', '16x gtceu:microchip_processor', '8x gtceu:soc', '16x gtceu:fine_copper_wire')
    //     .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 36')
    //     .itemOutputs('64x kubejs:lv_universal_circuit')
    //     .duration(200)
    //     .CWUt(32)
    //     .EUt(GTValues.VHA[GTValues.IV]);

    // event.recipes.gtceu.draco_circuit_assembler(id('mv_pack'))
    //     .itemInputs('16x kubejs:lv_universal_circuit','16x kubejs:ulv_universal_circuit', '16x gtceu:micro_processor', '8x gtceu:soc', '16x gtceu:fine_annealed_copper_wire')
    //     .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 72')
    //     .itemOutputs('64x kubejs:mv_universal_circuit')
    //     .duration(200)
    //     .CWUt(48)
    //     .EUt(GTValues.VHA[GTValues.LuV]);

    // event.recipes.gtceu.draco_circuit_assembler(id('hv_pack'))
    //     .itemInputs('16x kubejs:mv_universal_circuit','16x kubejs:lv_universal_circuit','16x kubejs:ulv_universal_circuit', '16x gtceu:nano_processor', '8x gtceu:advanced_soc', '16x gtceu:fine_platinum_wire')
    //     .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 144')
    //     .itemOutputs('64x kubejs:hv_universal_circuit')
    //     .duration(200)
    //     .CWUt(64)
    //     .EUt(GTValues.VHA[GTValues.ZPM]);

    // event.recipes.gtceu.draco_circuit_assembler(id('ev_pack'))
    //     .itemInputs('16x kubejs:hv_universal_circuit','16x kubejs:mv_universal_circuit','16x kubejs:lv_universal_circuit','16x kubejs:ulv_universal_circuit', '16x gtceu:quantum_processor', '8x gtceu:advanced_soc', '16x gtceu:fine_niobium_titanium_wire')
    //     .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 576')
    //     .itemOutputs('64x kubejs:ev_universal_circuit')
    //     .duration(200)
    //     .CWUt(80)
    //     .EUt(GTValues.VHA[GTValues.UV]);

    // event.recipes.gtceu.draco_circuit_assembler(id('iv_pack'))
    //     .itemInputs('16x kubejs:ev_universal_circuit','16x kubejs:hv_universal_circuit','16x kubejs:mv_universal_circuit','16x kubejs:lv_universal_circuit','16x kubejs:ulv_universal_circuit', '16x gtceu:crystal_processor', '8x gtceu:crystal_soc', '16x gtceu:fine_yttrium_barium_cuprate_wire')
    //     .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1152')
    //     .itemOutputs('64x kubejs:iv_universal_circuit')
    //     .duration(200)
    //     .CWUt(96)
    //     .EUt(GTValues.VHA[GTValues.UHV]);

    // event.recipes.gtceu.draco_circuit_assembler(id('luv_pack'))
    //     .itemInputs('16x kubejs:iv_universal_circuit','16x kubejs:ev_universal_circuit','16x kubejs:hv_universal_circuit','16x kubejs:mv_universal_circuit','16x kubejs:lv_universal_circuit','16x kubejs:ulv_universal_circuit', '16x gtceu:wetware_processor', '8x gtceu:highly_advanced_soc', '16x gtceu:fine_naquadah_wire')
    //     .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 2304')
    //     .itemOutputs('64x kubejs:luv_universal_circuit')
    //     .duration(200)
    //     .CWUt(112)
    //     .EUt(GTValues.VHA[GTValues.UEV]);

    // === Draconic Circuits ===

    event.recipes.gtceu.circuit_assembler(id('draconic_wetware_circuit_board'))
        .itemInputs('32x gtceu:wetware_circuit_board', '4x gtceu:petri_dish', 'gtceu:uhv_electric_pump', 'gtceu:uhv_sensor', '2x #gtceu:circuits/zpm', '4x gtceu:stellarium_foil')
        .inputFluids('gtceu:sterilized_growth_medium 6000')
        .itemOutputs('32x kubejs:draconic_wetware_circuit_board')
        .duration(1200)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.circuit_assembler(id('draconic_neuro_processing_unit'))
        .itemInputs('kubejs:draconic_wetware_printed_circuit_board', '16x kubejs:draconic_brain_matter_cells', '16x gtceu:polyether_ether_ketone_small_fluid_pipe', '16x gtceu:platinum_plate', '32x gtceu:silicone_rubber_foil', '16x gtceu:tritanium_bolt')
        .inputFluids('gtceu:sterilized_growth_medium 750')
        .itemOutputs('1x kubejs:draconic_neuro_processing_unit')
        .duration(600)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.draco_circuit_assembler(id('draconic_wetware_microchip_processor'))
        .itemInputs('kubejs:draconic_neuro_processing_unit', 'gtceu:crystal_cpu', 'gtceu:qbit_cpu_chip', '12x gtceu:advanced_smd_capacitor', '12x gtceu:advanced_smd_transistor', '16x gtceu:fine_yttrium_barium_cuprate_wire')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 72')
        .itemOutputs('3x kubejs:draconic_wetware_microchip_processor')
        .duration(200)
        .CWUt(144)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.draco_circuit_assembler(id('draconic_wetware_microchip_processor_cheap'))
        .itemInputs('kubejs:draconic_neuro_processing_unit', 'gtceu:highly_advanced_soc', '16x gtceu:fine_yttrium_barium_cuprate_wire', '8x gtceu:iron_selenide_over_strontium_titanium_oxide_bolt')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 72')
        .itemOutputs('6x kubejs:draconic_wetware_microchip_processor')
        .duration(50)
        .CWUt(144)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.draco_circuit_assembler(id('draconic_processor'))
        .itemInputs('kubejs:draconic_neuro_processing_unit', 'gtceu:crystal_cpu', 'gtceu:qbit_cpu_chip', '12x gtceu:advanced_smd_capacitor', '12x gtceu:advanced_smd_transistor', '16x gtceu:fine_iron_selenide_over_strontium_titanium_oxide_wire')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 72')
        .itemOutputs('2x kubejs:draconic_wetware_processor')
        .duration(200)
        .CWUt(144)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.draco_circuit_assembler(id('draconic_processor_assembly'))
        .itemInputs('kubejs:draconic_wetware_printed_circuit_board', '2x kubejs:draconic_wetware_processor', '8x gtceu:advanced_smd_inductor', '16x gtceu:advanced_smd_capacitor', '18x kubejs:qram_chip', '24x gtceu:fine_iron_selenide_over_strontium_titanium_oxide_wire')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 144')
        .itemOutputs('2x kubejs:draconic_wetware_processor_assembly')
        .duration(400)
        .CWUt(144)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.draco_circuit_assembler(id('draconic_processor_supercomputer'))
        .itemInputs('kubejs:draconic_wetware_printed_circuit_board', '2x kubejs:draconic_wetware_processor_assembly', '16x gtceu:advanced_smd_diode', '8x kubejs:3d_nor_chip', '24x kubejs:qram_chip', '32x gtceu:fine_iron_selenide_over_strontium_titanium_oxide_wire', '64x gtceu:polyether_ether_ketone_foil', '4x gtceu:tritanium_plate')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 1152')
        .itemOutputs('kubejs:draconic_wetware_processor_computer')
        .duration(400)
        .CWUt(144)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.draco_circuit_assembler(id('draconic_processor_mainframe'))
        .itemInputs('2x gtceu:neutronium_frame', '2x kubejs:draconic_wetware_processor_computer', '48x gtceu:advanced_smd_diode', '48x gtceu:advanced_smd_capacitor', '48x gtceu:advanced_smd_transistor', '48x gtceu:advanced_smd_resistor', '48x gtceu:advanced_smd_inductor', '64x gtceu:polyether_ether_ketone_foil', '32x gtceu:polyether_ether_ketone_foil', '24x kubejs:qram_chip', '2x gtceu:ruthenium_trinium_americium_neutronate_double_wire', '16x gtceu:tritanium_plate')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 2880', 'gtceu:polyether_ether_ketone 1152')
        .itemOutputs('kubejs:draconic_wetware_processor_mainframe')
        .duration(2000)
        .CWUt(144)
        .EUt(GTValues.VHA[GTValues.UEV]);

});