const $FactoryBlockPattern = Java.loadClass('com.gregtechceu.gtceu.api.pattern.FactoryBlockPattern')

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('draco_circuit_assembler')
        .category('draco_circuit_assembler')
        .setEUIO('in')
        .setMaxIOSize(16, 1, 3, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MASS_FAB, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

});


GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('draco_circuit_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('draco_circuit_assembler')
        .recipeModifier(GTRecipeModifiers.OC_NON_PERFECT_SUBTICK)
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('SSISS', 'SSDSS', '@SSSS', ' SSS ')
            .aisle('SSISS', 'GCDCG', 'RACAR', ' SGS ').setRepeatable(3, 15)
            .aisle('SSOSS', 'SSDSS', 'SSSSS', ' SSS ')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates. blocks('kubejs:enriched_naquadah_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(4).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(0))
                .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION).setExactLimit(1)))          
            .where('G', Predicates.blocks('kubejs:draco_resilient_fusion_glass'))
            .where('A', Predicates.blocks('gtceu:assembly_line_casing'))
            .where('C', Predicates.blocks('gtceu:assembly_line_unit'))
            .where('D', Predicates.blocks('kubejs:draco_ware_casing'))
            .where('I', Predicates.blocks('gtceu:ulv_input_bus'))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
            .where('R', Predicates.blocks('kubejs:draco_assembly_grating'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer('kubejs:block/casings/naquadah/casing',
            'gtceu:block/multiblock/assembly_line', false);
});