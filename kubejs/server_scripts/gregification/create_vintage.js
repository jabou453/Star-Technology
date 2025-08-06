ServerEvents.recipes(event => {
    const id = global.id;

    event.remove({mod: 'vintage'}); 
    
    // if (global.packmode !== 'hard'){(() => {   

    const vintage = event.recipes.vintage;
    const create = event.recipes.create;

    event.shaped('vintage:grinder_belt', [
        'PPP',
        'P P',
        'PPP'
    ], {
        P: '#create:sandpaper'
    }).id('start:shaped/grinder_belt');

    event.shaped('vintage:spring_coiling_machine_wheel', [
        ' A ',
        'AIA',
        ' A '
    ], {
        A: 'create:andesite_alloy',
        I: 'minecraft:iron_block'
    }).id('start:shaped/spring_coiling_machine_wheel');

    event.shaped('vintage:helve_hammer_slot_cover', [
        '  N',
        ' N ',
        'N  '
    ], {
        N: 'gtceu:brass_nugget'
    }).id('start:shaped/helve_hammer_slot_cover');

    event.shaped('vintage:belt_grinder', [
        'B',
        'C',
        'S'
    ], {
        B: 'vintage:grinder_belt',
        C: 'create:andesite_casing',
        S: 'create:shaft' 
    }).id('start:shaped/belt_grinder');

    event.shaped('vintage:spring_coiling_machine', [
        'I  ',
        'WCS',
        'I  '
    ], {
        W: 'vintage:spring_coiling_machine_wheel',
        C: 'create:andesite_casing',
        S: 'create:shaft',
        I: 'minecraft:iron_ingot'
    }).id('start:shaped/spring_coiling_machine');

    event.shaped('vintage:curving_press', [
        ' S ',
        'PCP'
    ], {
        P: 'gtceu:iron_spring',
        C: 'create:andesite_casing',
        S: 'create:shaft'
    }).id('start:shaped/curving_press');

    event.shaped('vintage:centrifuge', [
        'P P',
        'LSL',
        'PCP'
    ], {
        P: 'gtceu:iron_spring',
        C: 'create:andesite_casing',
        S: 'create:shaft',
        L: '#minecraft:logs'
    }).id('start:shaped/centrifuge');

    event.shaped('vintage:vibrating_table', [
        'PLP',
        'PTP'
    ], {
        P: 'gtceu:iron_spring',
        T: 'create:mechanical_piston',
        L: '#minecraft:wooden_slabs'
    }).id('start:shaped/vibrating_table');

    event.shaped('vintage:vacuum_chamber', [
        'PCP',
        'AMA'
    ], {
        P: 'gtceu:iron_spring',
        C: 'create:andesite_casing',
        A: 'create:andesite_alloy',
        M: 'create:mechanical_pump'
    }).id('start:shaped/vacuum_chamber');

    event.shaped('vintage:laser', [
        'GRG',
        'MCP',
        'QLQ'
    ], {
        P: 'gtceu:iron_spring',
        C: 'create:brass_casing',
        G: 'create:cogwheel',
        R: 'minecraft:redstone_block',
        M: 'create:precision_mechanism',
        Q: 'minecraft:quartz',
        L: 'vintage:laser_item'
    }).id('start:shaped/laser');

    create.mechanical_crafting('vintage:laser_item', [
		' R ',
		'PEP',
		'PTP',
		' G '
	], {
		T: 'minecraft:glowstone_dust',
		R: 'minecraft:redstone',
		P: 'gtceu:copper_plate',
		G: '#forge:glass/red',
        E: 'create:electron_tube'
	}).id('start:shaped/laser_item');

    create.mechanical_crafting('vintage:helve_hammer', [
		' I PP',
		'ILLLC',
		'II  S'
	], {
		I: 'minecraft:iron_block',
        P: 'gtceu:iron_spring',
        L: '#minecraft:logs',
        C: 'create:andesite_casing',
        S: 'create:shatf'
	}).id('start:shaped/helve_hammer');

    create.mechanical_crafting('vintage:lathe', [
		' MPA ',
		'SCCIS',
		'  PA '
	], {
		I: 'minecraft:iron_block',
        P: 'gtceu:iron_spring',
        A: 'create:andesite_alloy',
        M: 'create:precision_mechanism',
        C: 'create:andesite_casing',
        S: 'create:shatf'
	}).id('start:shaped/lathe');

    event.recipes.create.deploying('vintage:redstone_module', ['create:precision_mechanism', 'minecraft:redstone_block']);

    event.recipes.create.deploying('vintage:recipe_card', ['gtceu:brass_plate', 'create:empty_schematic']);

    //Carried over from source code
        // event.custom({
        // "type": "create:sequenced_assembly",
        // "ingredient": {"tag": "forge:plates/brass"},
        // "loops": 3,
        // "results": [{"item": "vintageimprovements:recipe_card"}],
        // "sequence": [{
        //     "type": "create:deploying",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_recipe_card"},{"item": "minecraft:redstone"}],
        //     "results": [{"item": "vintageimprovements:incomplete_recipe_card"}]
        // },
        // {
        //     "type": "create:pressing",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_recipe_card"}],
        //     "results": [{"item": "vintageimprovements:incomplete_recipe_card"}]
        // },
        // {
        //     "type": "vintageimprovements:polishing",
        //     "speed_limits": 2,
        //     "ingredients": [{"item": "vintageimprovements:incomplete_recipe_card"}],
        //     "results": [{"item": "vintageimprovements:incomplete_recipe_card"}]
        // }],
        // "transitionalItem": {"item": "vintageimprovements:incomplete_recipe_card"}
        // }).id(`start:sequenced_assembly/recipe_card`);

        // event.custom(
        // {
        // "type": "create:sequenced_assembly",
        // "ingredient": {"tag": "forge:plates/gold"},
        // "loops": 3,
        // "results": [{"item": "vintageimprovements:redstone_module"}],
        // "sequence": [{
        //     "type": "create:deploying",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_redstone_module"},{"item": "minecraft:redstone"}],
        //     "results": [{"item": "vintageimprovements:incomplete_redstone_module"}]
        // },
        // {
        //     "type": "vintageimprovements:vibrating",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_redstone_module"}],
        //     "results": [{"item": "vintageimprovements:incomplete_redstone_module"}]
        // },
        // {
        //     "type": "create:deploying",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_redstone_module"},{"tag": "forge:gems/quartz"}],
        //     "results": [{"item": "vintageimprovements:incomplete_redstone_module"}]
        // },
        // {
        //     "type": "create:pressing",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_redstone_module"}],
        //     "results": [{"item": "vintageimprovements:incomplete_redstone_module"}]
        // },
        // {
        //     "type": "create:deploying",
        //     "ingredients": [{"item": "vintageimprovements:incomplete_redstone_module"},{"tag": "forge:nuggets/iron"}],
        //     "results": [{"item": "vintageimprovements:incomplete_redstone_module"}]
        // }],
        // "transitionalItem": {"item": "vintageimprovements:incomplete_redstone_module"}
        // }).id(`start:sequenced_assembly/redstone_module`);

// })()}

});