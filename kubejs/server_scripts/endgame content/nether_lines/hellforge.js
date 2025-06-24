ServerEvents.recipes(event => {
    const id = global.id;
    
    // Hell Forge Machine
    event.recipes.gtceu.assembly_line(id('heart_of_the_flame'))
        .itemInputs(
            'kubejs:husk_of_the_flame', 'kubejs:hell_core', '6x gtceu:double_netherite_plate', 'kubejs:hell_core', '6x gtceu:double_netherite_plate',
            'kubejs:hell_core', '6x gtceu:double_netherite_plate', 'kubejs:hell_core', '6x gtceu:dense_ancient_netherite_plate', '24x gtceu:pure_netherite_screw'
        )
        .inputFluids(
            'start_core:flamewake_solvent 500000'
        )
        .itemOutputs('kubejs:heart_of_the_flame')
        .duration(6000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('kubejs:extreme_temperature_smelting_casing'))
                .EUt(GTValues.VHA[GTValues.UHV])
                .CWUt(192)
            )
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.assembly_line(id('hellforge'))
        .itemInputs(
            'gtceu:calamatium_frame', '12x #gtceu:circuits/uev', '32x kubejs:uhv_high_strength_panel', '8x gtceu:neutronium_huge_fluid_pipe',
            '32x gtceu:uhv_field_generator', '24x gtceu:uhv_electric_pump', '4x gtceu:calamatium_rotor', '32x gtceu:isovol_screw'
        )
        .inputFluids(
            'start_core:flamewake_solvent 240000',
            'gtceu:utopian_akreyrium 60000'
        )
        .itemOutputs('start_core:hellforge')
        .duration(2800)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:mega_blast_furnace'))
                .EUt(GTValues.VA[GTValues.UHV])
                .CWUt(192)
            )
        .EUt(GTValues.VA[GTValues.UEV]);

    //Hell Forge Recipes
    const HellForgeMat = (type,IngQuant,inputs,plasma,HeatMK,eut,SecDurPerIng) => {

        if (inputs.length == 3){
        event.recipes.gtceu.hellforge(id(`${type}`))
            .inputFluids(`gtceu:${plasma}_plasma ${IngQuant * 144}`, inputs[0], inputs[1], inputs[2])
            .blastFurnaceTemp(HeatMK)
            .duration(SecDurPerIng * 20 * IngQuant)
            .outputFluids(`gtceu:${type}_plasma ${IngQuant * 144}`)
            .EUt(eut);
        } if (inputs.length == 4){
        event.recipes.gtceu.hellforge(id(`${type}`))
            .inputFluids(`gtceu:${plasma}_plasma ${IngQuant * 144}`, inputs[0], inputs[1], inputs[2], inputs[3])
            .blastFurnaceTemp(HeatMK)
            .duration(SecDurPerIng * 20 * IngQuant)
            .outputFluids(`gtceu:${type}_plasma ${IngQuant * 144}`)
            .EUt(eut);
        } if (inputs.length == 5){
        event.recipes.gtceu.hellforge(id(`${type}`))
            .inputFluids(`gtceu:${plasma}_plasma ${IngQuant * 144}`, inputs[0], inputs[1], inputs[2], inputs[3], inputs[4])
            .blastFurnaceTemp(HeatMK)
            .duration(SecDurPerIng * 20 * IngQuant)
            .outputFluids(`gtceu:${type}_plasma ${IngQuant * 144}`)
            .EUt(eut);
        } if (inputs.length == 6){
        event.recipes.gtceu.hellforge(id(`${type}`))
            .inputFluids(`gtceu:${plasma}_plasma ${IngQuant * 144}`, inputs[0], inputs[1], inputs[2], inputs[3], inputs[4], inputs[5])
            .blastFurnaceTemp(HeatMK)
            .duration(SecDurPerIng * 20 * IngQuant)
            .outputFluids(`gtceu:${type}_plasma ${IngQuant * 144}`)
            .EUt(eut);
        }

    // Quantum Cooling
        event.recipes.gtceu.quantum_cooling(`${type}`)
            .inputFluids(`gtceu:${type}_plasma 144`)
            .inputFluids('gtceu:bec_og 250')
            .outputFluids(`gtceu:molten_${type} 144`)
            .outputFluids('gtceu:oganesson 200')
            .duration(SecDurPerIng * 20 * .28325)
            .EUt(eut / 2);

    // EBF Gas Swap
        if(HeatMK < 900){
            event.replaceInput({id: `gtceu:electric_blast_furnace/blast_${type}_gas`},
                Fluid.of('gtceu:krypton 10'),
                Fluid.of('gtceu:radon 5')
            );
        }
    }
    HellForgeMat('mythrolic_alloy', 11, ['gtceu:mythril 720', 'gtceu:hsss 576', 'gtceu:darmstadtium 288'], 'argon', 786, GTValues.VHA[GTValues.UEV], 43.6);
    HellForgeMat('magmada_alloy', 8, ['gtceu:adamantine 576', 'gtceu:neutronium 144', 'gtceu:rtm_alloy 432'], 'magmatic', 812, GTValues.VHA[GTValues.UEV], 52.4);
    HellForgeMat('starium_alloy', 8, ['gtceu:nether_star_concentrate 576', 'gtceu:trinaquadalloy 288', 'gtceu:estalt 288'], 'oxygen', 843, GTValues.VA[GTValues.UEV], 39.8);
    HellForgeMat('seaborgium_palladium_enriched_estalt_flerovium_alloy', 17, ['gtceu:seaborgium 576', 'gtceu:palladium 1152', 'gtceu:enriched_estalt 432', 'gtceu:flerovium 288'], 'nickel', 878, GTValues.VHA[GTValues.UIV], 47.4);
    HellForgeMat('nyanium', 14, ['gtceu:aurourium 1008', 'gtceu:uranium_rhodium_dinaquadide 576', 'gtceu:magnesium_nitride 144', 'gtceu:pure_netherite 288'], 'nitrogen', 444, GTValues.VA[GTValues.UHV], 76.8);

    });