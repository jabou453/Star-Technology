GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('electric_sifter')
        .category('electric_sifter')
        .setEUIO('in')
        .setMaxIOSize(2, 6, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('electric_sifter', 'simple')
        .tiers(GTValues.MAX)
        .definition((tier, builder) => {
            return builder
                .recipeType('electric_sifter')
                .workableTieredHullRenderer("gtceu:block/machines/sifter")
        }
    );

});