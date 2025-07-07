GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('solid_blast_furnace')
        .category('primitive')
        .setMaxIOSize(3, 3, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);

    // event.create('bessemer_blast_furnace')
    //     .category('primitive')
    //     .setMaxIOSize(3, 3, 0, 0)
    //     .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW , FillDirection.LEFT_TO_RIGHT)
    //     .setSound(GTSoundEntries.FURNACE);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('solid_blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('solid_blast_furnace')
        .appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('DDD', 'PPP', 'PPP', 'PPP')
            .aisle('DDD', 'P P', 'P P', 'P P')
            .aisle('DDD', 'PCP', 'PPP', 'PPP')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks('kubejs:high_steam_machine_casing').setMinGlobalLimited(15)
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1)))
            .where('D', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer('kubejs:block/hm/high_steam_machine_casing',
        'kubejs:block/multiblock/primitive_blast_furnace', false);

}); 