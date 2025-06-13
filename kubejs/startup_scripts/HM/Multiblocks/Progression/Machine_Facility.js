GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('machine_facility')
        .category('HM')
        .setEUIO('in')
        .setMaxIOSize(10, 1, 3, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    
    event.create('machine_facility', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('machine_facility')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#BBBBB#', 'BCCDCCB', 'BCADACB', 'BCCDCCB', '#BBBBB#') 
            .aisle('BCCCCCB', 'A#####A', 'A##E##A', 'A#####A', 'BCCDCCB') 
            .aisle('BCCCCCB', 'A##E##A', 'FFFFFFF', 'A##E##A', 'BCADACB') 
            .aisle('BCCCCCB', 'A#####A', 'A##E##A', 'A#####A', 'BCCDCCB') 
            .aisle('#BBBBB#', 'BCCDCCB', 'BCA@ACB', 'BCCDCCB', '#BBBBB#') 
            .where('A', Predicates.blocks('gtceu:tempered_glass'))
            .where('B', Predicates.blocks('gtceu:cast_iron_frame'))
            .where('#', Predicates.any())
            .where('C', Predicates.blocks('gtceu:solid_machine_casing')
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('D', Predicates.blocks('gtceu:solid_machine_casing')
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1).setMaxGlobalLimited(3)))
            .where('E', Predicates.blocks('gtceu:steel_gearbox'))
            .where('F', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel',
        'gtceu:block/machines/assembler', false);
        
});

    