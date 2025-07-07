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

});