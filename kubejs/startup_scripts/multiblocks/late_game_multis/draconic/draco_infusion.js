
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('draco_infusion')
        .category('draco_infusion')
        .setEUIO('in')
        .setMaxIOSize(7, 1, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.PORTAL_OPENING);

});

GTCEuStartupEvents.registry('gtceu:machine', event => { // Filler pre-multi

    event.create('draco_infusion', 'simple')
        .tiers(GTValues.UIV)
        .definition((tier, builder) => {
            return builder
                .recipeType('draco_infusion')
                .workableTieredHullRenderer("gtceu:block/machines/laser_engraver")
        }
    );

});