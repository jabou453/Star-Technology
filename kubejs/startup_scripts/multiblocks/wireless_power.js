// To be deleted after moved to Core

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('wireless_t1', 'multiblock')
        .recipeType('dummy')
        // need to define appearance block as super alloy (same with t2 and t3)
		.pattern(definition => FactoryBlockPattern.start()
            .aisle('####BBB####', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########') 
            .aisle('##BBCCCBB##', '###########', '#####D#####', '#####E#####', '#####D#####', '###########', '###########', '###########', '#####D#####', '#####E#####', '#####D#####') 
            .aisle('#BCCCFCCCB#', '#####G#####', '##D#####D##', '##E#####E##', '##D#####D##', '#####G#####', '###########', '#####G#####', '##D#####D##', '##E#####E##', '##D#####D##') 
            .aisle('#BCFCCCFCB#', '###G###G###', '###########', '###########', '###########', '###G###G###', '####HHH####', '###G###G###', '###########', '###########', '###########') 
            .aisle('BCCCCCCCCCB', '###########', '###########', '###########', '###########', '###########', '###H###H###', '###########', '###########', '###########', '###########') 
            .aisle('BCFCCBCCFCB', '##G##B##G##', '#D###B###D#', '#E###@###E#', '#D#######D#', '##G#####G##', '###H#I#H###', '##G#####G##', '#D#######D#', '#E###I###E#', '#D#######D#') 
            .aisle('BCCCCCCCCCB', '###########', '###########', '###########', '###########', '###########', '###H###H###', '###########', '###########', '###########', '###########') 
            .aisle('#BCFCCCFCB#', '###G###G###', '###########', '###########', '###########', '###G###G###', '####HHH####', '###G###G###', '###########', '###########', '###########') 
            .aisle('#BCCCFCCCB#', '#####G#####', '##D#####D##', '##E#####E##', '##D#####D##', '#####G#####', '###########', '#####G#####', '##D#####D##', '##E#####E##', '##D#####D##') 
            .aisle('##BBCCCBB##', '###########', '#####D#####', '#####E#####', '#####D#####', '###########', '###########', '###########', '#####D#####', '#####E#####', '#####D#####') 
            .aisle('####BBB####', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########') 
            .where('#', Predicates.any())
            .where('B', Predicates.blocks('kubejs:superalloy_casing')) // add a .or(Laser Input) no limit
            .where('C', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
            .where('D', Predicates.blocks('gtceu:hsla_steel_frame'))
            .where('E', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('F', Predicates.blocks('gtceu:fusion_coil'))
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('H', Predicates.blocks('thermal:signalum_glass')) // replace with gtceu/kubejs block if needed
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('I', Predicates.blocks('gtceu:superconducting_coil'))
			.build())
        .workableCasingRenderer('kubejs:block/casings/superalloy_casing', 'gtceu:block/machines/object_holder', false); //to be editted as needed
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('wireless_t2', 'multiblock')
        .recipeType('dummy')
		.pattern(definition => FactoryBlockPattern.start()
            .aisle('####BBB####', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########') 
            .aisle('##BBCCCBB##', '###########', '#####D#####', '#####E#####', '#####D#####', '###########', '###########', '###########', '#####D#####', '#####E#####', '#####F#####', '#####E#####', '#####D#####', '###########', '###########') 
            .aisle('#BCCCFCCCB#', '#####G#####', '##D#####D##', '##E#####E##', '##D#####D##', '#####G#####', '###########', '#####G#####', '##D#####D##', '##E#####E##', '##F#####F##', '##E#####E##', '##D#####D##', '#####G#####', '###########') 
            .aisle('#BCFCCCFCB#', '###G###G###', '###########', '###########', '###########', '###G###G###', '####HHH####', '###G###G###', '###########', '###########', '###########', '###########', '###########', '###G###G###', '###########') 
            .aisle('BCCCCCCCCCB', '###########', '###########', '###########', '###########', '###########', '###H###H###', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########') 
            .aisle('BCFCCBCCFCB', '##G##B##G##', '#D###B###D#', '#E###@###E#', '#D#######D#', '##G#####G##', '###H#I#H###', '##G#####G##', '#D#######D#', '#E###J###E#', '#F###F###F#', '#E###J###E#', '#D#######D#', '##G#####G##', '#####I#####') 
            .aisle('BCCCCCCCCCB', '###########', '###########', '###########', '###########', '###########', '###H###H###', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########') 
            .aisle('#BCFCCCFCB#', '###G###G###', '###########', '###########', '###########', '###G###G###', '####HHH####', '###G###G###', '###########', '###########', '###########', '###########', '###########', '###G###G###', '###########') 
            .aisle('#BCCCFCCCB#', '#####G#####', '##D#####D##', '##E#####E##', '##D#####D##', '#####G#####', '###########', '#####G#####', '##D#####D##', '##E#####E##', '##F#####F##', '##E#####E##', '##D#####D##', '#####G#####', '###########') 
            .aisle('##BBCCCBB##', '###########', '#####D#####', '#####E#####', '#####D#####', '###########', '###########', '###########', '#####D#####', '#####E#####', '#####F#####', '#####E#####', '#####D#####', '###########', '###########') 
            .aisle('####BBB####', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########') 
            .where('#', Predicates.any())
            .where('B', Predicates.blocks('kubejs:superalloy_casing'))
            .where('C', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
            .where('D', Predicates.blocks('gtceu:hsla_steel_frame'))
            .where('E', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('F', Predicates.blocks('gtceu:fusion_coil'))
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('H', Predicates.blocks('thermal:signalum_glass')) // replace with gtceu/kubejs block if needed
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('I', Predicates.blocks('gtceu:superconducting_coil'))
            .where('J', Predicates.blocks('thermal_extra:shellite_glass')) // replace with gtceu/kubejs block if needed
			.build())
        .workableCasingRenderer('kubejs:block/casings/superalloy_casing', 'gtceu:block/machines/object_holder', false); //to be editted as needed
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('wireless_t3', 'multiblock')
        .recipeType('dummy')
		.pattern(definition => FactoryBlockPattern.start()
            .aisle('####BBB####', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '#####C#####', '#####D#####', '#####E#####', '#####D#####', '#####C#####') 
            .aisle('##BBFFFBB##', '###########', '#####C#####', '#####D#####', '#####C#####', '###########', '###########', '###########', '#####C#####', '#####D#####', '#C###E###C#', '#D#######D#', '#E#######E#', '#D#######D#', '#C#######C#') 
            .aisle('#BFFFEFFFB#', '#####G#####', '##C#####C##', '##D#####D##', '##C#####C##', '#####G#####', '###########', '#####G#####', '##C#####C##', '##D#####D##', '##E#####E##', '###########', '#####H#####', '#####E#####', '#####H#####') 
            .aisle('#BFEFFFEFB#', '###G###G###', '###########', '###########', '###########', '###G###G###', '####III####', '###G###G###', '###########', '###########', '###########', '###########', '###H###H###', '###E###E###', '###H###H###') 
            .aisle('BFFFFFFFFFB', '###########', '###########', '###########', '###########', '###########', '###I###I###', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########') 
            .aisle('BFEFFBFFEFB', '##G##B##G##', '#C###B###C#', '#D###@###D#', '#C#######C#', '##G#####G##', '###I#J#I###', '##G#####G##', '#C#######C#', '#D###K###D#', 'CE###E###EC', 'D####K####D', 'E#H#####H#E', 'D#E##J##E#D', 'C#H#####H#C') 
            .aisle('BFFFFFFFFFB', '###########', '###########', '###########', '###########', '###########', '###I###I###', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########') 
            .aisle('#BFEFFFEFB#', '###G###G###', '###########', '###########', '###########', '###G###G###', '####III####', '###G###G###', '###########', '###########', '###########', '###########', '###H###H###', '###E###E###', '###H###H###') 
            .aisle('#BFFFEFFFB#', '#####G#####', '##C#####C##', '##D#####D##', '##C#####C##', '#####G#####', '###########', '#####G#####', '##C#####C##', '##D#####D##', '##E#####E##', '###########', '#####H#####', '#####E#####', '#####H#####') 
            .aisle('##BBFFFBB##', '###########', '#####C#####', '#####D#####', '#####C#####', '###########', '###########', '###########', '#####C#####', '#####D#####', '#C###E###C#', '#D#######D#', '#E#######E#', '#D#######D#', '#C#######C#') 
            .aisle('####BBB####', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '#####C#####', '#####D#####', '#####E#####', '#####D#####', '#####C#####') 
            .where('#', Predicates.any())
            .where('B', Predicates.blocks('kubejs:superalloy_casing'))
            .where('C', Predicates.blocks('gtceu:hsla_steel_frame'))
            .where('D', Predicates.blocks('gtceu:nonconducting_casing'))
            .where('E', Predicates.blocks('gtceu:fusion_coil'))
            .where('F', Predicates.blocks('kubejs:enriched_naquadah_machine_casing'))
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('H', Predicates.blocks('thermal:lumium_glass')) // replace with gtceu/kubejs block if needed
            .where('I', Predicates.blocks('thermal:signalum_glass')) // replace with gtceu/kubejs block if needed
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('J', Predicates.blocks('gtceu:superconducting_coil'))
            .where('K', Predicates.blocks('thermal_extra:shellite_glass')) // replace with gtceu/kubejs block if needed
			.build())
        .workableCasingRenderer('kubejs:block/casings/superalloy_casing', 'gtceu:block/machines/object_holder', false); //to be editted as needed
});