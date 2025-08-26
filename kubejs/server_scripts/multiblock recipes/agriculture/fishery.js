ServerEvents.recipes(event => {
    const id = global.id;

    event.shaped('gtceu:industrial_fishery', [
        'ABC',
        'DEF',
        'BGF'
    ], {
        A: 'gtceu:tungsten_single_cable',
        B: '#gtceu:circuits/iv',
        C: 'gtceu:iv_sensor',
        D: 'gtceu:iv_field_generator',
        E: 'gtceu:iv_fisher',
        F: 'gtceu:iv_robot_arm',
        G: 'gtceu:iv_electric_pump',
    }).id('start:shaped/industrial_fisher');

    event.recipes.gtceu.industrial_fishery(id('fishing_silkworm'))
        .itemInputs('exnihilosequentia:silkworm')
        .inputFluids('exnihilosequentia:sea_water 1000')
        .itemOutputsRanged('minecraft:cod', 0, 8)
        .itemOutputsRanged('minecraft:salmon', 0, 8)
        .itemOutputsRanged('minecraft:pufferfish', 0, 8)
        .itemOutputsRanged('minecraft:tropical_fish', 0, 8)
        .duration(1200)
        .circuit(0)
        .EUt(global.vha['lv']);

    event.recipes.gtceu.industrial_fishery(id('fishing_dried_silkworm_dough'))
        .itemInputs('kubejs:dried_silkworm_dough')
        .inputFluids('exnihilosequentia:sea_water 2000')
        .itemOutputsRanged('minecraft:cod', 9, 32)
        .itemOutputsRanged('minecraft:salmon', 9, 32)
        .itemOutputsRanged('minecraft:pufferfish', 9, 32)
        .itemOutputsRanged('minecraft:tropical_fish', 9, 32)
        .duration(600)
        .circuit(1)
        .EUt(global.vha['lv']);

    event.recipes.gtceu.industrial_fishery(id('fishing_bait_silkworm_oil_pellet'))
        .itemInputs('kubejs:silkworm_oil_pellet')
        .inputFluids('exnihilosequentia:sea_water 3000')
        .itemOutputsRanged('minecraft:cod', 33, 96)
        .itemOutputsRanged('minecraft:salmon', 33, 96)
        .itemOutputsRanged('minecraft:pufferfish', 33, 96)
        .itemOutputsRanged('minecraft:tropical_fish', 33, 96)
        .duration(300)
        .circuit(2)
        .EUt(global.vha['lv']);

    event.recipes.gtceu.industrial_fishery(id('fishing_bait_silkworm_gel'))
        .inputFluids('gtceu:silkworm_gel 100')
        .inputFluids('exnihilosequentia:sea_water 4000')
        .itemOutputsRanged('minecraft:cod', 97, 192)
        .itemOutputsRanged('minecraft:salmon', 97, 192)
        .itemOutputsRanged('minecraft:pufferfish', 97, 192)
        .itemOutputsRanged('minecraft:tropical_fish', 97, 192)
        .duration(150)
        .circuit(3)
        .EUt(global.vha['lv']);
    
    // Silkworms
    event.recipes.gtceu.fermenter(id('rooted_dirt'))
        .itemInputs('minecraft:dirt')
        .inputFluids('gtceu:fermented_biomass 10')
        .itemOutputs('minecraft:rooted_dirt')
        .duration(100)
        .EUt(global.vha['ulv']);

    event.recipes.gtceu.centrifuge(id('silkworm'))
        .itemInputs('rooted_dirt')
        .itemOutputs('minecraft:dirt', 'exnihilosequentia:silkworm')
        .duration(100)
        .EUt(global.vha['ulv']);
        
    // Dried Silkworm Dough
    event.recipes.gtceu.mixer(id('dried_silkworm_dough'))
        .itemInputs('exnihilosequentia:cooked_silkworm', 'gtceu:dough')
        .itemOutputs('kubejs:dried_silkworm_dough')
        .duration(100)
        .EUt(global.vha['lv']);
    
    // Silkworm Oil Pellet
    event.recipes.gtceu.extractor(id('silkworm_oil'))
        .itemInputs('exnihilosequentia:silkworm')
        .outputFluids('gtceu:raw_silkworm_oil 36')
        .duration(100)
        .EUt(global.vha['hv']);

    event.recipes.gtceu.distillation_tower(id('distill_silkworm_oil'))
        .inputFluids('gtceu:raw_silkworm_oil 100')
        .outputFluids('gtceu:refined_silkworm_oil 36')
        .outputFluids('gtceu:lubricant 14')
        .itemOutputs('gtceu:meat_dust')
        .duration(300)
        .EUt(global.vha['hv']);

    event.recipes.gtceu.canner(id('silkworm_oil_pellet'))
        .itemInputs('gtceu:fluid_cell')
        .inputFluids('gtceu:refined_silkworm_oil 50')
        .itemOutputs('kubejs:silkworm_oil_pellet')
        .duration(100)
        .EUt(global.vha['hv']);

    // Silkworm Gel
    event.recipes.gtceu.mixer(id('silkworm_gel'))
        .itemInputs('gtceu:agar_dust', 'gtceu:gelatin_dust')
        .inputFluids('gtceu:refined_silkworm_oil 100')
        .outputFluids('gtceu:silkworm_gel 2000')
        .duration(100)
        .EUt(global.vha['iv']);

});