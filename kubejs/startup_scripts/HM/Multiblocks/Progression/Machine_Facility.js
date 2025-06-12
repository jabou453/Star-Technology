GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('machine_facility')
        .category('HM')
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

// .pattern(definition => FactoryBlockPattern.start()
// 	.aisle("#BBBBB#", "BCCCCCB", "BCADACB", "BCCCCCB", "#BBBBB#") 
// 	.aisle("BCCCCCB", "A#####A", "A##E##A", "A#####A", "BCCCCCB") 
// 	.aisle("BCCCCCB", "A##E##A", "DFFFFFD", "A##E##A", "BCADACB") 
// 	.aisle("BCCCCCB", "A#####A", "A##E##A", "A#####A", "BCCCCCB") 
// 	.aisle("#BBBBB#", "BCCCCCB", "BCA@ACB", "BCCCCCB", "#BBBBB#") 
// 	.where("A", Predicates.blocks("gtceu:tempered_glass"))
// 	.where("B", Predicates.blocks("gtceu:cast_iron_frame"))
// 	.where("#", Predicates.any())
// 	.where("C", Predicates.blocks("gtceu:solid_machine_casing"))
// 	.where("D", Predicates.blocks("kubejs:meshblock"))
// 	.where("E", Predicates.blocks("gtceu:steel_gearbox"))
// 	.where("F", Predicates.blocks("gtceu:steel_pipe_casing"))
// 	.where("@", Predicates.controller(Predicates.blocks(definition.get())))