// packmode: hard

ServerEvents.recipes(event => {
    const id = global.id;

    event.remove({ output: /^gtceu:.*firebox_casing/ });
    event.remove({ output: /^gtceu:.*gearbox/ });
    event.remove({ output: /^gtceu:.*pipe_casing/ });
    event.remove({ output: /^gtceu:.*engine_intake_casing/ });

    const SpecialCasing = (material, tier,f,p,g,e) => {
    let type = (material == 'tungsten_steel') ? 'tungstensteel' : material ;
    if (f == true) {
        let mod = (type == 'enriched_naquadah') ? 'start_core' : 'gtceu' ;
    event.recipes.gtceu.assembler(id(`${type}_firebox_casing_hm`))
        .itemInputs(`6x gtceu:${material}_plate`, `6x gtceu:${material}_rod`, `gtceu:${material}_frame`)
        .inputFluids(`gtceu:${material} 144`)
        .circuit(2)
        .itemOutputs(`2x ${mod}:${type}_firebox_casing`)
        .duration(100)
        .EUt(2 * (4 ** tier));
    }
    if (p == true) {
        let mod = (type == 'enriched_naquadah') ? 'kubejs' : 'gtceu' ;
    event.recipes.gtceu.assembler(id(`${type}_pipe_casing_hm`))
        .itemInputs(`6x gtceu:${material}_plate`, `6x gtceu:${material}_small_fluid_pipe`, `gtceu:${material}_frame`)
        .inputFluids(`gtceu:${material} 144`)
        .circuit(3)
        .itemOutputs(`2x ${mod}:${type}_pipe_casing`)
        .duration(100)
        .EUt(2 * (4 ** tier));
    }
    if (g == true) {
        let mod = (type == 'enriched_naquadah') ? 'kubejs' : 'gtceu' ;
    event.recipes.gtceu.assembler(id(`${type}_gearbox_hm`))
        .itemInputs(`6x gtceu:${material}_plate`, `2x gtceu:${material}_gear`, `4x gtceu:small_${material}_gear`, `gtceu:${material}_frame`)
        .inputFluids(`gtceu:${material} 144`)
        .circuit(4)
        .itemOutputs(`2x ${mod}:${type}_gearbox`)
        .duration(100)
        .EUt(2 * (4 ** tier)); 
    }
    if (e == true) {
        let casingType = (type == 'titanium') ? 'gtceu:stable' : (type == 'tungstensteel') ? 'gtceu:robust' : `kubejs:${type}` ;
        let engineType = (type == 'titanium') ? 'gtceu:' : `start_core:${type}_` ;
    event.recipes.gtceu.assembler(id(`${engineType.split(':')[1]}engine_intake_casing_hm`))
        .itemInputs(`4x gtceu:${material}_rotor`, `6x gtceu:${material}_normal_fluid_pipe`, `${casingType}_machine_casing`)
        .inputFluids(`gtceu:${material} 144`)
        .circuit(7)
        .itemOutputs(`2x ${engineType}engine_intake_casing`)
        .duration(100)
        .EUt(2 * (4 ** tier)); 
    }
    }
    SpecialCasing('bronze',0,true,true,true,false);
    SpecialCasing('steel',1,true,true,true,false);
    SpecialCasing('stainless_steel',3,true,true,true,false);
    SpecialCasing('titanium',4,true,true,true,true);
    SpecialCasing('tungsten_steel',5,true,true,true,false); // made sperate engine load since keeps breaking
    SpecialCasing('enriched_naquadah',7,true,true,true,true);
    
    //Tungsten Steel Engine Load
    event.recipes.gtceu.assembler(id(`extreme_engine_intake_casing_hm`))
        .itemInputs(`4x gtceu:tungsten_steel_rotor`, `6x gtceu:tungsten_steel_normal_fluid_pipe`, `gtceu:robust_machine_casing`)
        .inputFluids(`gtceu:tungsten_steel 144`)
        .circuit(7)
        .itemOutputs(`2x gtceu:extreme_engine_intake_casing`)
        .duration(100)
        .EUt(2 * (4 ** 5)); 

});