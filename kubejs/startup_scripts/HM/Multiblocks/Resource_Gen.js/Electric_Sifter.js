GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('electric_sifter')
        .category('resource_gen')
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

//.pattern(definition => FactoryBlockPattern.start()
	// .aisle("A###A", "ABBBA", "ABBBA", "ABBBA", "ABBBA", "ABBBA", "#AAA#") 
	// .aisle("#####", "BBBBB", "BCCCB", "BDDDB", "BDDDB", "B###B", "A#A#A") 
	// .aisle("#####", "BBBBB", "BCCCB", "BDDDB", "BDDDB", "B###B", "AAAAA") 
	// .aisle("#####", "BBBBB", "BCCCB", "BDDDB", "BDDDB", "B###B", "A#A#A") 
	// .aisle("A###A", "ABBBA", "AB@BA", "ABBBA", "ABBBA", "ABBBA", "#AAA#") 
	// .where("A", Predicates.blocks("gtceu:treated_wood_frame")
	// .where("#", Predicates.any())
	// .where("B", Predicates.blocks("kubejs:wood_casing"))
	// .where("C", Predicates.blocks("gtceu:steel_pipe_casing"))
	// .where("D", Predicates.blocks("kubejs:meshblock"))
	// .where("@", Predicates.controller(Predicates.blocks(definition.get())))