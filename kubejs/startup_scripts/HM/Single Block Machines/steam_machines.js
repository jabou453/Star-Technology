GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_blast_furnace', 'steam')
    .definition((tier, builder) =>{
    builder
        .recipeType('gt_blasting')
        .workableCasingRenderer('gtceu:block/casings/steam/bricked_steel/side', 'gtceu:block/machines/gt_blaster_single', false);
    });

});