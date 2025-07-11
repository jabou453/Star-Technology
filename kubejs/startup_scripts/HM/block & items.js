StartupEvents.registry('item', event => {
	event.create('flint_shard')
		.displayName('Flint Shard')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/flint_shard`);

	event.create('plant_fibers')
		.displayName('Plant Fibers')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/plant_fibers`);

	event.create('packed_mud_ball')
		.displayName('Packed Mud Ball')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/packed_mud_ball`);

	event.create('mud_brick')
		.displayName('Packed Mud Brick')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/packed_mud_brick`);

	event.create('stone_brick')
		.displayName('Stone Brick')
		.rarity('common')
		.texture(`kubejs:item/hm/pre-lv/stone_brick`);

	event.create('charcoal_pellet')
		.displayName('Charcoal Pellet')
		.rarity('common')
		.burnTime(720)
		.texture(`kubejs:item/hm/pre-lv/charcoal_pellet`);

	event.create('water_bowl')
		.displayName('Water Bowl')
		.rarity('common')
		.unstackable()
		.texture(`kubejs:item/hm/pre-lv/water_bowl`);

	// ================================================================================== //

	[
		{type: 'Hematite', composition: 'Fe₂O₃'},
		{type:'Cassiterite', composition: 'SnO₂'},
		{type:'Chalcopyrite', composition: 'CuFeS₂'},
		{type:'Sphalerite', composition: 'ZnS'},
		{type:'Pyrite', composition: 'FeS₂'},
		{type:'Magnetite', composition: 'Fe₃O₄'},
		{type:'Galena', composition: 'PbS'}
	].forEach(ore => {
		const {type, composition} = ore;
		let to_id = (name) => name.toLowerCase().replace(/\s/g, '_')
		let name = `${type} Crushed Ore Chunk`;
		let id = to_id(name);

		event.create(id)
			.displayName(name)
			.tooltip(`§e${composition}`)
			.texture(`kubejs:item/hm/pre-lv/${id}`)
	});

	// ================================================================================== //

	[
		`Incomplete Long Rod`,
		`Incomplete Double Plate`,
		`Incomplete Gear`,
		`Incomplete Small Gear`,
		`Incomplete Rotor`,
		`Incomplete Spring`,
		`Incomplete Small Spring`,
		`Incomplete Single Wire`,
		`Incomplete Fine Wire`,
		`Incomplete Fluid Pipe`,
		`Incomplete Item Pipe`,
	].forEach(name => {
		let to_id = (name) => name.toLowerCase().replace(/\s/g, '_')
		let id = to_id(name);
		event.create(id)
			.displayName(name)
			.maxStackSize(64)
			.texture(`kubejs:item/hm/incomplete_parts/${id}`)
	});

	// ================================================================================== //

	event.create('basic_scavenging_rod')
		.displayName('Basic Scavenging Rod')
		.rarity('common')
		.maxDamage(256)
		.unstackable()
		.texture(`kubejs:item/hm/pre-lv/basic_scavenging_rod`);

	event.create('scavenging_rod')
		.displayName('Scavenging Rod')
		.rarity('common')
		.maxDamage(512)
		.unstackable()
		.texture(`kubejs:item/hm/pre-lv/scavenging_rod`);

	// ================================================================================== //

	// event.create('iron_sand_paper')
	// 	.displayName('Iron Sand Paper')
	// 	.rarity('common')
	// 	.maxDamage(96)
	// 	.unstackable()
	// 	.texture(`kubejs:item/hm/pre-lv/iron_sand_paper`);

	// ================================================================================== //

	['Electric Motor', 'Electric Pump', 'Conveyor Module', 'Robot Arm', 'Electric Piston', 'Emitter'].forEach(ULVComp => {
		let id = `${ULVComp.toLowerCase().replace(' ','_')}`
		event.create(`ulv_${id}`)
			.displayName(`ULV ${ULVComp}`)
			.texture(`kubejs:item/hm/pre-lv/ulv_${id}`);
	});

	['Ingot', 'Ball', 'Raw'].forEach(Ceramic => {
		event.create(`unfired_${Ceramic.toLowerCase()}_ceramic_casting_mold`)
			.displayName(`Unfired ${Ceramic} Ceramic Casting Mold`)
			.texture(`kubejs:item/hm/pre-lv/unfired_${Ceramic.toLowerCase()}_ceramic_casting_mold`);
		if (Ceramic !== 'Raw')
		event.create(`${Ceramic.toLowerCase()}_ceramic_casting_mold`)
			.displayName(`${Ceramic} Ceramic Casting Mold`)
			.texture(`kubejs:item/hm/pre-lv/${Ceramic.toLowerCase()}_ceramic_casting_mold`);
	});

});

StartupEvents.registry('block', event => {
	event.create('reinforced_stone_bricks')
		.displayName('Reinforced Stone Bricks')
		.hardness(5)
		.resistance(1)
		.soundType('stone')
		.requiresTool(true)
		.tagBlock("mineable/pickaxe")
		.tagBlock('minecraft:needs_stone_tool')
		.textureAll('kubejs:block/hm/reinforced_stone_bricks');

	// ================================================================================== //

	const crucible_stages = [
		{ id: 'crucible_stage_1', name: 'Slightly Hollowed Log' },
		{ id: 'crucible_stage_2', name: 'Fairly Hollowed Log' },
		{ id: 'crucible_stage_3', name: 'Mostly Hollowed Log' }
	]

	const table_stages = [
		{ id: 'crafting_stage_1', name: 'Shaped Stripped Log' },
		{ id: 'crafting_stage_2', name: 'Partially Carved Crafting Table' },
		{ id: 'crafting_stage_3', name: 'Uncovered Crafting Table' }
	]

	crucible_stages.forEach(crucible => {
		const { id, name } = crucible

		event.create(id)
			.displayName(name)
			.hardness(1)
			.resistance(2)
			.requiresTool(true)
			.tagBlock("minecraft:mineable/axe")
			.tagBlock("minecraft:needs_stone_tool");
	});

	table_stages.forEach(table => {
		const { id, name } = table

		event.create(id)
			.displayName(name)
			.hardness(1)
			.resistance(2)
			.requiresTool(true)
			.tagBlock("minecraft:mineable/axe")
			.tagBlock("minecraft:needs_stone_tool");
	});

	event.create('high_steam_machine_casing')
		.displayName('Sturdy Steam Machine Casing')
		.hardness(5)
		.resistance(1)
		.soundType('stone')
		.requiresTool(true)
		.tagBlock("mineable/pickaxe")
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/hm/high_steam_machine_casing');

	event.create('refined_sand', 'falling')
		.displayName('Refined Sand')
		.hardness(1)
		.resistance(1)
		.soundType('sand')
		.requiresTool(false)
		.tagBlock("mineable/shovel")
		.textureAll('kubejs:block/hm/refined_sand');

	event.create('refined_dust', 'falling')
		.displayName('Refined Dust')
		.hardness(1)
		.resistance(1)
		.soundType('sand')
		.requiresTool(false)
		.tagBlock("mineable/shovel")
		.textureAll('kubejs:block/hm/refined_dust');
});

ItemEvents.modification(event => {
	event.modify('minecraft:cocoa_beans', item => {
		item.foodProperties = food => {
			food.hunger(1)
			food.saturation(1)
			food.effect('minecraft:slowness', 80, 2, 1)
			food.effect('minecraft:hunger', 80, 1, .1)
			food.effect('minecraft:blindness', 20, 1, .05)
			food.fastToEat(true)
		}
	})
});