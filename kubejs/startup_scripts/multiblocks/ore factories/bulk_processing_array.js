GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('bulk_ore_processing_array')
        .category('ore_processing')
        .setEUIO('in')
        .setMaxIOSize(1, 6, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW , FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.FURNACE);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('bulk_ore_processing_array', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bulk_ore_processing_array')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(() => Block.getBlock('kubejs:enriched_naquadah_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('             AAA  ','             CCC  ','             CCC  ','              C   ','                  ','                  ','                  ','                  ','                  ')
            .aisle('      AAA   ACCCA ','      CCC   CRFRC ','      CCC   C#F#C ','       C     CFC  ','             CCC  ','              C   ','                  ','                  ','                  ')
            .aisle('AAA  ACCCA ACCCCCA','GGG  CR#RC CR#R#RC','GGG  CR#RC C#####C','GGG   C#C   C###C ','NNN   CCC   C###C ','       C     C#C  ','       N     CCC  ','              C   ','              N   ')
            .aisle('ACA  ACCCA ACCCCCA','GPG  C#P#C CFRPRFC','GPPPPPPP#C CF#P#FC','GGG  C#PPPPPPPP#FC','NNN   CPC   C#P#C ','      CMC   C#P#C ','      N N    CPC  ','             CMC  ','             N N  ')
            .aisle('AAA  ACCCA ACCCCCA','GGG  CR#RC CR#R#RC','GGG  CR#RC C#####C','GGG   C#C   C###C ','NNN   CCC   C###C ','       C     C#C  ','       N     CCC  ','              C   ','              N   ')
            .aisle('      AAA   ACCCA ','      C@C   CRFRC ','      CCC   C#F#C ','       C     CFC  ','             CCC  ','              C   ','                  ','                  ','                  ')
            .aisle('             AAA  ','             CCC  ','             CCC  ','              C   ','                  ','                  ','                  ','                  ','                  ')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('kubejs:enriched_naquadah_machine_casing')
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('G', Predicates.blocks('gtceu:fusion_glass')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where('P', Predicates.blocks('kubejs:enriched_naquadah_pipe_casing'))
            .where('R', Predicates.blocks('kubejs:enriched_naquadah_gearbox'))
            .where('A', Predicates.blocks('start_core:enriched_naquadah_firebox_casing'))
            .where('N', Predicates.blocks('kubejs:noble_mixing_casing'))
            .where('F', Predicates.blocks('gtceu:astrenalloy_nx_frame'))
            .where('#', Predicates.blocks('minecraft:air'))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer('kubejs:block/casings/naquadah/casing',
        'kubejs:block/multiblock/primitive_blast_furnace', false);
       
});
