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

    // event.recipes.gtceu.draco_infusion(id('draco_boule'))
    //     .itemInputs()
    //     .inputFluids()
    //     .itemOutputs()
    //     .duration()
    //     .EUt();

    });