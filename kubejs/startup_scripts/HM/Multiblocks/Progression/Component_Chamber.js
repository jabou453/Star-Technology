GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('component_chamber')
        .category('HM')
        .setEUIO('in')
        .setMaxIOSize(10, 1, 3, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('component_chamber', 'simple')
        .tiers(GTValues.MV)
        .definition((tier, builder) => {
            return builder
                .recipeType('component_chamber')
                .workableTieredHullRenderer("gtceu:block/machines/assembler")
        }
    );

});