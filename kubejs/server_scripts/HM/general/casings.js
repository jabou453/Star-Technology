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
        .circuit(2)
        .itemOutputs(`2x ${mod}:${type}_firebox_casing`)
        .duration(100)
        .EUt(2 * (4 ** tier));
    }
    if (p == true) {
        let mod = (type == 'enriched_naquadah') ? 'kubejs' : 'gtceu' ;
    event.recipes.gtceu.assembler(id(`${type}_pipe_casing_hm`))
        .itemInputs(`6x gtceu:${material}_plate`, `6x gtceu:${material}_small_fluid_pipe`, `gtceu:${material}_frame`)
        .circuit(3)
        .itemOutputs(`2x ${mod}:${type}_pipe_casing`)
        .duration(100)
        .EUt(2 * (4 ** tier));
    }
    if (g == true) {
        let mod = (type == 'enriched_naquadah') ? 'kubejs' : 'gtceu' ;
    event.recipes.gtceu.assembler(id(`${type}_gearbox_hm`))
        .itemInputs(`6x gtceu:${material}_plate`, `2x gtceu:${material}_gear`, `4x gtceu:small_${material}_gear`, `gtceu:${material}_frame`)
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

    // Storages

    event.remove({ id: /gtceu:shaped\/.*_drum/ });
    event.remove({ id: /gtceu:assembler\/.*_drum/ });
    event.remove({ id: 'gtceu:assembler/wood_barrel' });
    event.remove({ id: /gtceu:shaped\/.*_crate/ });
    event.remove({ id: /gtceu:assembler\/.*_crate/ });

    const CrateType = (material, tier) => {
        let material2nd = (material == 'wood') ? 'iron' : material ;
        event.recipes.gtceu.assembler(id(`${material}_crate_hm`))
            .itemInputs(`4x gtceu:long_${material2nd}_rod`, `4x gtceu:${material2nd}_screw`, `6x gtceu:${material}_plate`)
            .itemOutputs(`gtceu:${material}_crate`)
            .duration(200)
            .circuit(5)
            .EUt(2 * (4 ** tier));
    };
        event.recipes.create.mechanical_crafting(Item.of(`gtceu:wood_crate`), [
            'PRSRP',
            'PSWSP',
            'PRSRP'
        ], {
            S: 'gtceu:iron_screw',
            P: 'gtceu:wood_plate',
            W: '#forge:tools/saws',
            R: 'gtceu:long_iron_rod'
        });
    
    CrateType('wood', 0);
    CrateType('bronze', 1); 
    CrateType('steel', 2);
    CrateType('aluminium', 3);
    CrateType('stainless_steel', 4);
    CrateType('titanium', 5);
    CrateType('tungsten_steel', 6);

    const DrumType = (material, tier, Mod) => {
        let materialRod = (material == 'wood') ? 'iron' : material ;
        event.recipes.gtceu.assembler(id(`${material}_drum_hm`))
            .itemInputs(`2x gtceu:long_${materialRod}_rod`, `1x gtceu:${material}_large_fluid_pipe`, `4x gtceu:${material}_plate`)
            .itemOutputs(`${Mod}:${material}_drum`)
            .duration(200)
            .circuit(2)
            .EUt(1 * (4 ** tier));
    };

    DrumType('wood', 0, 'gtceu');
    DrumType('bronze', 1, 'gtceu');
    DrumType('steel', 2, 'gtceu');
    DrumType('gold', 2, 'gtceu');
    DrumType('aluminium', 3, 'gtceu');
    DrumType('stainless_steel', 4, 'gtceu');
    DrumType('titanium', 5, 'gtceu');
    DrumType('tungsten_steel', 6, 'gtceu');
    DrumType('enriched_naquadah', 7, 'start_core');
    DrumType('neutronium', 8, 'start_core');

    // Standard Casing


});