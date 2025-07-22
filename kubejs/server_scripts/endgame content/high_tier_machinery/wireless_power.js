ServerEvents.recipes(event => {
    const id = global.id;

    // === Controllers ===
    const wirelessControllers = (type, inputs, fluids, research, cwu, eu) => {
    event.recipes.gtceu.assembly_line(id(type))
        .itemInputs(inputs)
        .inputFluids(fluids)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(research)
                .EUt(eu / 2)
                .CWUt(cwu)
        )
        .itemOutputs(`start_core:${type}`)
        .duration(600)
        .EUt(eu);
    }
    wirelessControllers('dream_link_node', ['gtceu:uhv_machine_hull', '32x gtceu:uhv_emitter', '10x #gtceu:circuits/uev', '12x gtceu:uhv_sensor', '64x gtceu:normal_laser_pipe', '48x gtceu:uhpic_chip', '64x gtceu:normal_laser_pipe', '48x gtceu:uhpic_chip', '64x gtceu:normal_laser_pipe', '48x gtceu:uhpic_chip', '64x gtceu:normal_laser_pipe', '48x gtceu:uhpic_chip', '64x gtceu:neutronium_foil', '8x gtceu:ruthenium_trinium_americium_neutronate_hex_wire'], ['gtceu:polyether_ether_ketone 25600', 'gtceu:indium_tin_lead_cadmium_soldering_alloy 14400', 'gtceu:naquadria 12800'], 'gtceu:active_transformer', 144, GTValues.VHA[GTValues.UHV]);
    wirelessControllers('oneiric_relay', ['gtceu:uev_machine_hull', '32x gtceu:uev_emitter', '10x #gtceu:circuits/uiv', '12x gtceu:uev_sensor', '64x gtceu:normal_laser_pipe', '48x kubejs:uepic_chip', '64x gtceu:normal_laser_pipe', '48x kubejs:uepic_chip', '64x gtceu:normal_laser_pipe', '48x kubejs:uepic_chip', '64x gtceu:normal_laser_pipe', '48x kubejs:uepic_chip', '64x gtceu:mythrolic_alloy_foil', '8x gtceu:seaborgium_palladium_enriched_estalt_flerovium_alloy_hex_wire'], ['gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 25600', 'gtceu:indium_tin_lead_cadmium_soldering_alloy 14400', 'gtceu:isovol 12800'], 'start_core:dream_link_node', 192, GTValues.VHA[GTValues.UEV]);
    //wirelessControllers('daydream_spire', ['gtceu:uiv_machine_hull', '32x gtceu:uiv_emitter', '10x #gtceu:circuits/uxv', '12x gtceu:uiv_sensor', '64x gtceu:normal_laser_pipe', '48x kubejs:uipic_chip', '64x gtceu:normal_laser_pipe', '48x kubejs:uipic_chip', '64x gtceu:normal_laser_pipe', '48x kubejs:uipic_chip', '64x gtceu:normal_laser_pipe', '48x kubejs:uipic_chip', '64x gtceu:|tbh material|_foil', '8x gtceu:|tbh superconductor|_hex_wire'], ['gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 25600', 'gtceu:indium_tin_lead_cadmium_soldering_alloy 14400', 'gtceu:calamatium 12800'], 'start_core:oneiric_relay', 224, GTValues.VHA[GTValues.UIV]);

    // === Hatches & Covers ===
    
    const WirelessTiers = (tier, chip, cable, material, eu, cwu, scaler) => {
        let coilID = (tier === 'uv') ? 'gtceu' : 'kubejs';
        event.recipes.gtceu.assembler(id(`${tier}_2a_dream_link_cover_item`))
            .itemInputs('gtceu:computer_monitor_cover', `2x gtceu:${tier}_sensor`, `3x gtceu:${material}_plate`, `1x ${coilID}:${tier}_voltage_coil`, `2x ${chip}`, `4x gtceu:${cable}_single_cable`)
            .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 192')
            .itemOutputs(`start_core:${tier}_2a_dream_link_cover_item`)
            .circuit(3)
            .duration(400)
            .EUt(eu);

    const WirelessVariants = (type, typeUnder) => {
        let TypeUnder = (typeUnder === 'cover') ? '2a_dream_link_cover_item' : `${typeUnder}_dream_link_energy_hatch`;
        let hatch = (type === '2a') ? `gtceu:${tier}_energy_input_hatch` : (type === '64a') ? `gtceu:${tier}_substation_input_hatch_64a` : `gtceu:${tier}_energy_input_hatch_${type}`;
        event.recipes.gtceu.assembly_line(id(`${tier}_${type}_dream_link_energy_hatch`))
            .itemInputs(hatch, `1x gtceu:${tier}_field_generator`, `4x ${chip}`, `2x gtceu:${cable}_single_cable`, `2x #gtceu:circuits/${tier}`, `start_core:${tier}_2a_dream_link_cover_item`)
            .inputFluids(`gtceu:sodium_potassium ${scaler * 2000 + 4000}`, `gtceu:indium_tin_lead_cadmium_soldering_alloy ${(4 * scaler) * 180 + 720}`)
            .itemOutputs(`start_core:${tier}_${type}_dream_link_energy_hatch`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(`start_core:${tier}_${TypeUnder}`)
                    .EUt(eu / 2)
                    .CWUt(cwu)
            )
            .duration(600)
            .EUt(eu * 3);
    };
    WirelessVariants('2a', 'cover');
    WirelessVariants('4a', '2a');
    WirelessVariants('16a', '4a');
    WirelessVariants('64a', '16a');

    };
    WirelessTiers('uv', 'gtceu:uhpic_chip', 'yttrium_barium_cuprate', 'darmstadtium', GTValues.VHA[GTValues.UV], 96, .5);
    WirelessTiers('uhv', 'gtceu:uhpic_chip', 'europium', 'neutronium', GTValues.VHA[GTValues.UHV], 144, 2);
    WirelessTiers('uev', 'kubejs:uepic_chip', 'cerium_tritelluride', 'mythrolic_alloy', GTValues.VHA[GTValues.UEV], 192, 3);
    WirelessTiers('uiv', 'kubejs:uepic_chip', 'polonium_bismide', 'chaotixic_alloy', GTValues.VHA[GTValues.UIV], 240, 4);
    // UXV Tier
    // OpV Tier
    // MAX Tier

    


});