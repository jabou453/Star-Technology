ServerEvents.recipes(event => {
    const id = global.id;

    // Pre - Array

    event.recipes.gtceu.extractor(id('dragon_breath'))
        .itemInputs('minecraft:dragon_breath')
        .outputFluids('gtceu:dragon_breath 250')
        .itemOutputs('minecraft:glass_bottle')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.UEV]);
    
    event.remove({id: 'minecraft:popped_chorus_fruit'});
    event.replaceInput({ input: 'minecraft:popped_chorus_fruit' },'minecraft:popped_chorus_fruit','minecraft:chorus_fruit');
    event.recipes.gtceu.assembly_line(id('true_absolute_chorus'))
        .itemInputs('kubejs:void_core', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', 
        '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', 
        '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', 
        '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit')
        .inputFluids('gtceu:dragon_breath 1500')
        .itemOutputs('kubejs:true_absolute_chorus')
        .duration(12000)
        .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of('minecraft:popped_chorus_fruit'))
                    .EUt(GTValues.VHA[GTValues.UHV])
                    .CWUt(192)
                )
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.heat_chamber(id('popped_chorus_fruit'))
        .itemInputs('minecraft:chorus_fruit')
        .inputFluids('gtceu:oganesson 10')
        .itemOutputs('minecraft:popped_chorus_fruit')
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembler(id('core_casing'))
        .itemInputs('6x gtceu:double_aurourium_plate', 'gtceu:void_frame', '2x kubejs:true_absolute_chorus', '2x kubejs:runic_wave_generator', 'gtceu:uev_field_generator', 'gtceu:uev_emitter')
        .itemOutputs('kubejs:core_casing')
        .circuit(7)
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.UEV]);
        

    // Draconic Infusion Array
    
    // Machine recipes
    
    event.recipes.gtceu.assembly_line(id('draco_infusion'))
        .itemInputs(
            'gtceu:void_frame','6x gtceu:uev_robot_arm','2x gtceu:uev_field_generator','6x gtceu:dense_nyanium_plate','1x gtceu:uev_electric_pump',
            '64x kubejs:uepic_chip', '48x gtceu:fine_seaborgium_palladium_enriched_estalt_flerovium_alloy_wire','3x gtceu:echo_shard_lens'
        )
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 57600','gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 21600','gtceu:dragon_breath 500')
        .itemOutputs('gtceu:draco_infusion')
        .duration(2400)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('minecraft:dragon_head'))
                .EUt(GTValues.VA[GTValues.UEV])
                .CWUt(216)
            )
        .EUt(GTValues.VA[GTValues.UIV]);

    // Infusion

    //--[1]-[2]--
    //[3]-[0]-[4]
    //--[5]-[6]--

    event.recipes.gtceu.draco_infusion(id('dragonic_eye'))
        .itemInputs('gtceu:quantum_eye', '2x kubejs:draconic_scale_cells', '2x kubejs:draconic_scale_cells', '2x kubejs:draconic_scale_cells', 
            '2x kubejs:draconic_stem_cells', '2x kubejs:draconic_stem_cells', 'kubejs:helish_star')
        .inputFluids('gtceu:dragon_breath 12500')
        .itemOutputs('1x kubejs:dragonic_eye')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.draco_infusion(id('draco_stem_cells'))
        .itemInputs('minecraft:popped_chorus_fruit', '2x gtceu:stem_cells', '2x gtceu:stem_cells', '2x gtceu:stem_cells', 
            '2x gtceu:stem_cells', '2x gtceu:stem_cells', '2x gtceu:stem_cells')
        .inputFluids('gtceu:dragon_breath 1200')
        .itemOutputs('12x kubejs:draconic_stem_cells')
        .duration(320)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.draco_infusion(id('draco_brain_matter_cells'))
        .itemInputs('2x kubejs:draconic_stem_cells', '2x kubejs:draconic_stem_cells', '1x #gtceu:circuits/luv', '1x #gtceu:circuits/luv',
            '2x kubejs:draconic_stem_cells', '2x kubejs:draconic_stem_cells', '1x #gtceu:circuits/luv')
        .inputFluids('gtceu:sterilized_growth_medium 2400')
        .itemOutputs('8x kubejs:draconic_brain_matter_cells')
        .duration(480)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.draco_infusion(id('draco_scale_cells'))
        .itemInputs('1x kubejs:draconic_stem_cells', '1x kubejs:draconic_stem_cells', '1x gtceu:enriched_naquadah_plate', '1x gtceu:netherite_plate', 
            '1x kubejs:draconic_stem_cells', '1x kubejs:draconic_stem_cells', '1x gtceu:naquadria_plate')
        .inputFluids('gtceu:lepton_coalescing_superalloy 576')
        .itemOutputs('4x kubejs:draconic_scale_cells')
        .duration(240)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.draco_infusion(id('draco_boule'))
        .itemInputs('gtceu:neutronium_boule', '2x kubejs:draconic_stem_cells', '1x gtceu:neutronium_block', '32x gtceu:silicon_block', 
            '32x gtceu:silicon_block', '1x gtceu:neutronium_block', '2x kubejs:draconic_stem_cells')
        .inputFluids('gtceu:pure_dragon_breath 32000')
        .itemOutputs('kubejs:draco_boule')
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.draco_infusion(id('draco_ware_casing'))
        .itemInputs('gtceu:high_power_casing', 'gtceu:uev_sensor', '1x #gtceu:circuits/uev', '2x kubejs:draconic_brain_matter_cells', 
            '2x kubejs:draconic_brain_matter_cells', '1x #gtceu:circuits/uev', 'gtceu:uev_sensor')
        .inputFluids('gtceu:dragon_breath 8000')
        .itemOutputs('2x kubejs:draco_ware_casing')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.draco_infusion(id('draco_resilient_fusion_glass'))
        .itemInputs('gtceu:fusion_glass', '2x kubejs:draconic_scale_cells', '4x gtceu:neutron_reflector', 'gtceu:uhv_field_generator', 
            'gtceu:uhv_field_generator', '4x gtceu:neutron_reflector', '2x kubejs:draconic_scale_cells')
        .inputFluids('gtceu:dragon_breath 4000')
        .itemOutputs('2x kubejs:draco_resilient_fusion_glass')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.draco_infusion(id('draco_assembly_grating'))
        .itemInputs('gtceu:assembly_line_grating', '8x gtceu:void_foil', '8x gtceu:void_foil', '1x gtceu:uev_robot_arm', 
            '1x gtceu:uev_robot_arm', '8x gtceu:void_foil', '8x gtceu:void_foil')
        .inputFluids('gtceu:dragon_breath 6000')
        .itemOutputs('2x kubejs:draco_assembly_grating')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.UEV]);

    });