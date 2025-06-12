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

// .pattern(definition => FactoryBlockPattern.start()
// 	.aisle("ABBBA", "ABCBA", "ABCBA", "ABCBA", "ABBBA") 
// 	.aisle("BDDDB", "B###B", "B###B", "B###B", "BBBBB") 
// 	.aisle("BDEDB", "C###C", "C#F#C", "C###C", "BBEBB") 
// 	.aisle("BDDDB", "B###B", "B###B", "B###B", "BBBBB") 
// 	.aisle("AB@BA", "ABCBA", "ABCBA", "ABCBA", "ABBBA") 
// 	.where("A", Predicates.blocks("gtceu:steel_frame"))
// 	.where("B", Predicates.blocks("gtceu:heatproof_machine_casing"))
// 	.where("C", Predicates.blocks("gtceu:tempered_glass"))
// 	.where("D", Predicates.blocks("gtceu:frostproof_machine_casing"))
// 	.where("#", Predicates.any())
// 	.where("E", Predicates.blocks("gtceu:cupronickel_coil_block"))
// 	.where("F", Predicates.blocks("gtceu:steel_pipe_casing"))
// 	.where("@", Predicates.controller(Predicates.blocks(definition.get())))