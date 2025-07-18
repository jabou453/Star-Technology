// packmode: hard

ServerEvents.recipes(event => {
    const id = global.id;

    // Ethanol => Ethane
    ['fermented_spider_eye', 'fermentable'].forEach(type => {
    event.remove({ id: `createdieselgenerators:basin_fermenting/${type}` })
    });

    event.custom({
		"type": "createdieselgenerators:basin_fermenting",
		"ingredients": [
			{
			"item": "minecraft:sugar"
			},
			{
			"item": "minecraft:sugar"
			},
			{
			"item": "minecraft:bone_meal"
			},
			{
			"item": "minecraft:potato"
			},
			{
			"item": "minecraft:potato"
			},
			{
			"fluid": "minecraft:water",
			"amount": 250
			}
		],
        "heatRequirement": "superheated",
		"processingTime": 200,
		"results": [
			{
			"fluid": "createdieselgenerators:ethanol",
			"amount": 100
			}
		]
	}).id('start:basin_fermenting/ethanol');

        let ethanol = new JSONObject()
        ethanol.add('amount', 1000)
        ethanol.add('value', {tag:'forge:ethanol'})

    event.recipes.gtceu.chemical_reactor(id('ethane_from_ethanol'))
		.notConsumable('gtceu:nickel_dust')
        .inputFluids(FluidIngredientJS.of(ethanol), 'gtceu:hydrogen 2000')
        .outputFluids('gtceu:ethane 1000', 'minecraft:water 1000')
        .circuit(3)
        .duration(3650)
        .EUt(30);

	event.replaceInput({ id: 'gtceu:mixer/rose_gold' },
        'gtceu:copper_dust',
        'gtceu:annealed_copper_dust'
    );

	event.recipes.gtceu.macerator(id('soul_sand_dust'))
        .itemInputs('minecraft:soul_sand')
        .itemOutputs('thermal_extra:soul_sand_dust')
        .duration(40)
        .EUt(16);
    event.recipes.gtceu.mixer(id('soul_infused_dust'))
        .itemInputs('gtceu:invar_dust', '2x thermal_extra:soul_sand_dust')
        .itemOutputs('3x gtceu:soul_infused_dust')
        .duration(300)
        .EUt(16);
    event.recipes.gtceu.mixer(id('signalum_dust'))
        .itemInputs('gtceu:silver_dust', '3x gtceu:copper_dust', '4x minecraft:redstone')
        .itemOutputs('8x gtceu:signalum_dust')
        .duration(800)
        .EUt(64)
        .circuit(3);
    event.recipes.gtceu.mixer(id('lumium_dust'))
        .itemInputs('gtceu:silver_dust', '3x gtceu:tin_dust', '2x minecraft:glowstone_dust')
        .itemOutputs('6x gtceu:lumium_dust')
        .duration(600)
        .EUt(256);
    event.recipes.gtceu.mixer(id('enderium_dust'))
        .itemInputs('3x gtceu:lead_dust', '1x gtceu:diamond_dust', '3x gtceu:ender_pearl_dust')
        .itemOutputs('6x gtceu:enderium_dust')
        .duration(1000)
        .EUt(1024);

    event.recipes.gtceu.chemical_bath(id('hot_signalium_cooling_distilled_water'))
        .itemInputs('gtceu:hot_signalum_ingot')
        .inputFluids('gtceu:distilled_water')
        .itemOutputs('gtceu:signalium_ingot')
        .duration(375)
        .EUt(120);
    event.recipes.gtceu.chemical_bath(id('hot_signalium_cooling_water'))
        .itemInputs('gtceu:hot_signalum_ingot')
        .inputFluids('minecraft:water')
        .itemOutputs('gtceu:signalium_ingot')
        .duration(600)
        .EUt(120);

    event.remove({id:'gtceu:laser_engraver/engrave_cpu_silicon'});
    event.recipes.gtceu.laser_engraver(id('engrave_cpu_silicon'))
        .itemInputs('gtceu:silicon_wafer')
        .notConsumable('#forge:lenses/light_blue')
        .itemOutputs('gtceu:cpu_wafer')
        .duration(900)
        .EUt(120)
        .cleanroom(CleanroomType.CLEANROOM);


    event.remove({id:'gtceu:centrifuge/endstone_separation'});

    event.remove({ id: 'gtceu:mixer/magnalium' });
    event.remove({ id: 'gtceu:alloy_smelter/magnesium_dust_and_aluminium_dust_into_magnalium' });

    event.remove({output: 'gtceu:epoxy'}); // Temp for Eta

});