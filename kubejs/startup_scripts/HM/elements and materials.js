GTCEuStartupEvents.registry('gtceu:material', event => {
	event.create('pig_iron')
		.ingot(1)
		.dust()
		.components('1x iron')
		.color(0x8E8385)
		.iconSet(DULL)
		.flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, bolt_and_screw, no_decomp, no_smelt);

	event.create('flisnt')
		.color(0x888B8C)
		.toolStats(ToolProperty.Builder.of(1, 1, 96, 1, [
			GTToolType.SAW,
			GTToolType.HARD_HAMMER,
			GTToolType.PICKAXE,
			GTToolType.SHOVEL,
			GTToolType.AXE,
			GTToolType.SWORD,
			GTToolType.KNIFE,
			GTToolType.FILE,
			GTToolType.SCYTHE
		]).build());

	event.create('coke_clay')
		.dust()
		.color(0xD7D2AA)
		.secondaryColor(0xA09C78);

	event.create('crude_cast_iron')
		.ingot()
		.components('1x pig_iron')
		.color(0x3D413F)
		.iconSet(DULL)
		.flags(no_decomp, no_smelt);

	event.create('crude_wrought_iron')
		.ingot()
		.liquid(new GTFluidBuilder().temperature(1700))
		.components('1x wrought_iron')
		.color(0x7A6E69)
		.iconSet(DULL)
		.flags(no_decomp, no_smelt);

	event.create('cast_iron')
        .ingot(1)
		.liquid(new GTFluidBuilder().temperature(1450))
        .components('18x crude_cast_iron', '1x bismuth', '2x copper')
        .color(0x696E6C)
		.secondaryColor(0x4C5052)
        .iconSet(METALLIC)
        .flags(no_abs_recipe, not_alloy, foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, bolt_and_screw, no_decomp, no_smelt);

	GTMaterials.Iron.addFlags(foil, fine_wire);
	GTMaterials.Brass.addFlags(ring, foil);
	GTMaterials.TinAlloy.addFlags(ring, foil, rotor);
	GTMaterials.Potin.addFlags(foil, ring, small_gear);
	GTMaterials.Cupronickel.addFlags(ring);
	GTMaterials.Nickel.addFlags(foil);
	GTMaterials.WroughtIron.addFlags(frame, small_gear);
	GTMaterials.RedAlloy.addFlags(spring);
	GTMaterials.Lead.addFlags(small_gear);

	const compDustIcon = (name, elements, color, icon, flags) => {
        event.create(name).dust().components(elements).color(color).iconSet(icon).flags(flags);
    }
	const DustNoComp = (name, color, flags) => {
        event.create(name).dust().color(color).flags(flags);
    }
	const LiquidNoComp = (name, color, flags) => {
        event.create(name).fluid().color(color).flags(flags);
    }
	const compLiquidTemp = (name, heat, elements, color, flags) => {
        event.create(name).liquid(new GTFluidBuilder().temperature(heat)).components(elements).color(color).flags(flags);
    }
	
	compDustIcon('metallic_ore_sludge', ['8x pentlandite', '5x gold', '2x silver'],0xA4AC72,METALLIC,no_decomp)
	LiquidNoComp('raw_ore_concentrate',0x7C8478,no_decomp);
	LiquidNoComp('raw_ore_residue',0x908784,no_decomp);
	LiquidNoComp('diluted_drilling_formula',0xDFD2A0,no_decomp);
	LiquidNoComp('concentrate_drilling_formula',0xEDDC9E,no_decomp);
	LiquidNoComp('residue_drilling_formula',0xE2CF84,no_decomp);
	LiquidNoComp('slurry_drilling_formula',0xDCD0A0,no_decomp);
	LiquidNoComp('poor_mixture_drilling_formula',0xCCC29C,no_decomp);
	LiquidNoComp('rich_mixture_drilling_formula',0xB9B08B,no_decomp);
	
	compLiquidTemp('molten_waste',1170,'mystery',0x806861,no_decomp);
	compLiquidTemp('cooled_molten_waste',515,'mystery',0x6D5852,no_decomp);

	compLiquidTemp('impure_molten_ore_mixture',2190,'mystery',0x746E6D, no_decomp);
	compLiquidTemp('pure_molten_ore_mixture',2635,'mystery',0x5C5451, no_decomp);

	compLiquidTemp('cooled_molten_bauxite_ore', 480, ['1x bauxite'], 0x9B9B83, [no_decomp]);
    compLiquidTemp('cooled_molten_pitchblende_ore', 480, ['1x pitchblende'], 0x95A96F, [no_decomp]);
    compLiquidTemp('cooled_molten_molybdenite_ore', 480, ['1x molybdenite'], 0xA6B38D, [no_decomp]);
    compLiquidTemp('cooled_molten_ilmenite_ore', 480, ['1x ilmenite'], 0xAE9279, [no_decomp]);
    compLiquidTemp('cooled_molten_tungstate_ore', 480, ['1x tungstate'], 0x848E97, [no_decomp]);
    compLiquidTemp('cooled_molten_bastnasite_ore', 480, ['1x bastnasite'], 0x80766F, [no_decomp]);
    compLiquidTemp('cooled_molten_cooperite_ore', 480, ['1x cooperite'], 0x8B8A76, [no_decomp]);

});