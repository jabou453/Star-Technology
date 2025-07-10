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

    event.recipes.gtceu.fusion_reactor(id('voidic_plasma'))
        .inputFluids('gtceu:thorium 4608', 'gtceu:void 2304')
        .outputFluids('gtceu:voidic_plasma 1152')
        .duration(2500)
        .EUt(350000)
        .fusionStartEU(1040000000);

    event.recipes.gtceu.fusion_reactor(id('preon_plasma'))
        .inputFluids('gtceu:utopian_akreyrium 1500', 'gtceu:radon 2000')
        .outputFluids('gtceu:preon_plasma 1000')
        .duration(742)
        .EUt(586000)
        .fusionStartEU(1160000000);

    event.recipes.gtceu.fusion_reactor(id('paradox_plasma'))
        .inputFluids('gtceu:chaos_centric_void 1000', 'gtceu:order_centric_void 1000')
        .outputFluids('gtceu:paradox_plasma 1000')
        .duration(646)
        .EUt(260000)
        .fusionStartEU(900000000);

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