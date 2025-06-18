ServerEvents.recipes(event => {
    const id = global.id;

    // Pre - Array

    event.recipes.gtceu.extractor(id('dragon_breath'))
        .itemInputs('minecraft:dragon_breath')
        .outputFluids('gtceu:dragon_breath 250')
        .itemOutputs('minecraft:glass_bottle')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.UEV]);
    
    event.remove({id: 'minecraft:popped_chorus_fruit'});
    event.replaceInput({ input: 'minecraft:popped_chorus_fruit' },'minecraft:popped_chorus_fruit','minecraft:chorus_fruit');
    event.recipes.gtceu.large_quantum_compressor(id('true_absolute_chorus'))
        .itemInputs('kubejs:void_core', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit'
            ,'64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit'
            ,'64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit'
            ,'64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit', '64x minecraft:popped_chorus_fruit')
        .itemOutputs('kubejs:true_absolute_chorus')
        .duration(12000)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.heat_chamber(id('popped_chorus_fruit'))
        .itemInputs('minecraft:chorus_fruit')
        .inputFluids('gtceu:oganesson 10')
        .itemOutputs('minecraft:popped_chorus_fruit')
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.assembler(id('core_casing'))
        .itemInputs('6x gtceu:double_aurourium_plate', 'gtceu:void_frame', 'kubejs:true_absolute_chorus', '2x kubejs:runic_wave_generator', 'gtceu:uev_field_generator', 'gtceu:uev_emitter')
        .itemOutputs('kubejs:core_casing')
        .circuit(7)
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.UEV]);
        

    // Draconic Infusion Array
    
    // Machine recipes
    
        //=====//

    // Infusion

    event.recipes.gtceu.draco_infusion(id('draco_boule'))
        .itemInputs('gtceu:neutronium_boule', '8x kubejs:draconic_stem_cells', '1x gtceu:neutronium_block', '32x gtceu:silicon_block', 
            '32x gtceu:silicon_block', '1x gtceu:neutronium_block', '8x kubejs:draconic_stem_cells')
        .inputFluids('gtceu:pure_dragon_breath 60000')
        .itemOutputs('kubejs:draco_boule')
        .duration(6000)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.draco_infusion(id('draco_ware_casing'))
        .itemInputs('gtceu:high_power_casing', 'gtceu:uev_sensor', '1x #gtceu:circuits/uev', '2x kubejs:draconic_brain_matter_cells', 
            '2x kubejs:draconic_brain_matter_cells', '1x #gtceu:circuits/uev', 'gtceu:uev_sensor')
        .inputFluids('gtceu:dragon_breath 8000')
        .itemOutputs('kubejs:draco_ware_casing')
        .duration(800)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.draco_infusion(id('draco_resilient_fusion_glass'))
        .itemInputs('gtceu:fusion_glass', '2x kubejs:draconic_scale_cells', '4x gtceu:neutron_reflector', 'gtceu:uhv_field_generator', 
            'gtceu:uhv_field_generator', '4x gtceu:neutron_reflector', '2x kubejs:draconic_scale_cells')
        .inputFluids('gtceu:dragon_breath 4000')
        .itemOutputs('kubejs:draco_resilient_fusion_glass')
        .duration(400)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.draco_infusion(id('draco_assembly_grating'))
        .itemInputs('gtceu:assembly_line_grating', '8x gtceu:void_foil', '8x gtceu:void_foil', '1x gtceu:uev_robot_arm', 
            '1x gtceu:uev_robot_arm', '8x gtceu:void_foil', '8x gtceu:void_foil')
        .inputFluids('gtceu:dragon_breath 6000')
        .itemOutputs('kubejs:draco_assembly_grating')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.UEV]);

    });