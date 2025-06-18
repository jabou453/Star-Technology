ServerEvents.recipes(event => {
    const id = global.id;

    // Bulk Parse
    event.forEachRecipe({type:'gtceu:fusion_reactor'}, Fusion9x => {
    var BulkFusion = JSON.parse(Fusion9x.json);
        var DurationFusion = BulkFusion.duration;
        var EUsFusion = BulkFusion.data.eu_to_start;
        var EUtFusion = BulkFusion.tickInputs.eu[0].content;
        var FusionFluid1 = BulkFusion.inputs.fluid[0].content;
        var FusionFluid2 = BulkFusion.inputs.fluid[1].content;
        var FusionOutput = BulkFusion.outputs.fluid[0].content;

    if (FusionOutput.value[0].fluid.slice(6) !== 'helium_plasma') {
    event.recipes.gtceu.fusion_reactor(id(`bulk_${FusionOutput.value[0].fluid.slice(6)}`))
        .inputFluids(Fluid.of(`gtceu:${FusionFluid1.value[0].tag.slice(6)}`, FusionFluid1.amount * 9), Fluid.of(`gtceu:${FusionFluid2.value[0].tag.slice(6)}`, FusionFluid2.amount * 9))
        .outputFluids(Fluid.of(FusionOutput.value[0].fluid, FusionOutput.amount * 9))
        .duration(DurationFusion * 9)
        .fusionStartEU(EUsFusion)
        .EUt(EUtFusion);
    }
    if (FusionOutput.value[0].fluid.slice(6) == 'helium_plasma') {
        event.recipes.gtceu.fusion_reactor(id(`bulk_${FusionOutput.value[0].fluid.slice(6)}`))
        .inputFluids(Fluid.of(`gtceu:${FusionFluid1.value[0].tag.slice(6)}`, FusionFluid1.amount * 8), Fluid.of(`gtceu:${FusionFluid2.value[0].tag.slice(6)}`, FusionFluid2.amount * 8))
        .outputFluids(Fluid.of(FusionOutput.value[0].fluid, FusionOutput.amount * 8))
        .duration(DurationFusion * 9)
        .fusionStartEU(EUsFusion)
        .EUt(EUtFusion);
    }

    });

    event.remove({type: 'gtceu:fusion_reactor'});

    // Custom
    event.recipes.gtceu.fusion_reactor(id('magmatic_plasma'))
        .inputFluids('gtceu:highly_unstable_nether_magma 46080', 'gtceu:iron_plasma 2304')
        .outputFluids('gtceu:magmatic_plasma 1152')
        .duration(1188)
        .EUt(66666)
        .fusionStartEU(720000000);

    event.recipes.gtceu.fusion_reactor(id('aurourium'))
        .inputFluids('gtceu:nether_star_concentrate 576', 'gtceu:seaborgium 576')
        .outputFluids('gtceu:aurourium 288')
        .duration(720)
        .EUt(783552)
        .fusionStartEU(888888888);    

    // Plasma Generators
    event.recipes.gtceu.plasma_generator(id('magmatic_plasma'))
        .inputFluids('gtceu:magmatic_plasma 1')
        .outputFluids('gtceu:highly_unstable_nether_magma 1')
        .duration(333)
        .EUt(-2048);

    event.recipes.gtceu.plasma_generator(id('argon_plasma'))
        .inputFluids('gtceu:argon_plasma 1')
        .outputFluids('gtceu:argon 1')
        .duration(80)
        .EUt(-2048);

   

});