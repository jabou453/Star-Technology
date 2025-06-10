GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('machine_facility')
        .category('machine_facility')
        .setEUIO('in')
        .setMaxIOSize(10, 1, 3, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('machine_facility', 'simple')
        .tiers(GTValues.LV)
        .definition((tier, builder) => {
            return builder
                .recipeType('machine_facility')
                .workableTieredHullRenderer("gtceu:block/machines/assembler")
        }
    );

});