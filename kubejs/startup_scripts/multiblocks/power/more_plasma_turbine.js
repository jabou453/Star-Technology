GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('supreme_plasma_turbine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('plasma_generator')
        .generator(true)
        .machine((holder) => new $LargeTurbine(holder, GTValues.IV))
        .regressWhenWaiting(false)
        .recipeModifier((machine, recipe) => $LargeTurbine.recipeModifier(machine, recipe), true)        
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('         ','FCC      ','FFCHH  CC','FCC      ','         ')
            .aisle('FCC      ','  FECCXX ','  FECEEF ','  FECCXX ','FCC      ')
            .aisle('FFCHH  CC','  FECEEF ','  RGGGGL ','  FECEEF ','FFCHH  CC')
            .aisle('FCC      ','  FECCXX ','  FECEEF ','  FECCXX ','FCC      ')
            .aisle('         ','FCC      ','FFCH@  CC','FCC      ','         ')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks('kubejs:enriched_naquadah_machine_casing')
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1)))
            .where('F', Predicates.blocks('gtceu:void_frame'))
            .where('C', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
            .where('E', Predicates.blocks('start_core:enriched_naquadah_engine_intake_casing'))
            .where('X', Predicates.blocks('start_core:enriched_naquadah_firebox_casing'))
            .where('G', Predicates.blocks('kubejs:enriched_naquadah_gearbox'))
            .where('L', Predicates.abilities(PartAbility.OUTPUT_LASER))
            .where('R', Predicates.abilities(PartAbility.ROTOR_HOLDER))
			.where(' ', Predicates.any())
            .build())
        .workableCasingRenderer('kubejs:block/casings/naquadah/casing',
        'gtceu:block/multiblock/generator/large_plasma_turbine', false);
        
});