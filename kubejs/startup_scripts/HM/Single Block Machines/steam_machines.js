GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_blast_furnace', 'steam')
    .definition((tier, builder) =>{
    builder
        .recipeType('gt_blasting')
        .workableTieredHullRenderer('gtceu:block/machines/alloy_smelter')
    });
});