ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.assembler(id('netherite_reinforced_mesh'))
        .itemInputs('1x gtceu:carbon_fiber_mesh', '4x gtceu:netherite_rod', '1x minecraft:netherite_ingot')
        .inputFluids('gtceu:epoxy 288')
        .itemOutputs('kubejs:netherite_reinforced_mesh')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.mixer(id('new_soldering_alloy'))
        .itemInputs('14x gtceu:indium_dust', '3x gtceu:tin_dust', '2x gtceu:lead_dust', 'gtceu:cadmium_dust')
        .itemOutputs('20x gtceu:indium_tin_lead_cadmium_soldering_alloy_dust')
        .duration(400)
        .EUt(45000);
    
    event.recipes.gtceu.chemical_reactor(id('strontium_oxide'))
        .itemInputs('gtceu:strontium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:strontium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.large_chemical_reactor(id('strontium_oxide'))
        .itemInputs('gtceu:strontium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:strontium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.chemical_reactor(id('titanium_oxide'))
        .itemInputs('gtceu:titanium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:titanium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.large_chemical_reactor(id('titanium_oxide'))
        .itemInputs('gtceu:titanium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:titanium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.mixer(id('strontium_titanium_oxide'))
        .itemInputs('gtceu:strontium_oxide_dust', 'gtceu:titanium_oxide_dust')
        .itemOutputs('2x gtceu:strontium_titanium_oxide_dust')
        .duration(400)
        .EUt(420);

    event.recipes.gtceu.chemical_reactor(id('iron_selenide'))
        .itemInputs('gtceu:iron_dust', 'gtceu:selenium_dust')
        .itemOutputs('gtceu:iron_selenide_dust')
        .duration(360)
        .EUt(1460);

    event.recipes.gtceu.large_chemical_reactor(id('iron_selenide'))
        .itemInputs('gtceu:iron_dust', 'gtceu:selenium_dust')
        .itemOutputs('gtceu:iron_selenide_dust')
        .duration(360)
        .EUt(1460);

    event.recipes.gtceu.mixer(id('iron_selenide_over_strontium_titanium_oxide'))
        .itemInputs('gtceu:iron_selenide_dust', 'gtceu:strontium_titanium_oxide_dust')
        .itemOutputs('2x gtceu:iron_selenide_over_strontium_titanium_oxide_dust')
        .duration(1200)
        .EUt(240000);

    event.recipes.gtceu.large_chemical_reactor(id('iron_titanium_oxide'))
        .itemInputs('15x gtceu:ferrosilite_dust', '6x gtceu:titanium_oxide_dust')
        .itemOutputs('gtceu:iron_titanium_oxide_dust', '9x gtceu:silicon_dioxide_dust')
        .duration(4800)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.mixer(id('astatine_bis_tritelluride_cobo_selenium'))
        .itemInputs('gtceu:astatine_dust', 'gtceu:bismuth_tritelluride_dust', '4x gtceu:cobalt_dust', 'gtceu:selenium_dust')
        .itemOutputs('gtceu:astatine_bis_tritelluride_cobo_selenium_dust')
        .duration(360)
        .circuit(3)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.mixer(id('astatine_bis_tritelluride_cobo_selenium_over_iron_titanium_oxide_dust'))
        .itemInputs('gtceu:astatine_bis_tritelluride_cobo_selenium_dust', 'gtceu:iron_titanium_oxide_dust')
        .itemOutputs('gtceu:astatine_bis_tritelluride_cobo_selenium_over_iron_titanium_oxide_dust')
        .duration(480)
        .circuit(1)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.polarizer(id('magnetic_zapolgium'))
        .itemInputs('gtceu:zapolgium_ingot')
        .itemOutputs('gtceu:magnetic_zapolgium_ingot')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.polarizer(id('magnetic_pure_netherite'))
        .itemInputs('gtceu:pure_netherite_ingot')
        .itemOutputs('gtceu:magnetic_pure_netherite_ingot')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.mixer(id('cerium_tritelluride'))
        .itemInputs('gtceu:cerium_dust', '3x gtceu:tellurium_dust')
        .itemOutputs('4x gtceu:cerium_tritelluride_dust')
        .duration(900)
        .circuit(4)
        .EUt((GTValues.VHA[GTValues.UHV]));

    event.recipes.gtceu.mixer(id('polonium_bismide'))
        .itemInputs('gtceu:polonium_dust', 'gtceu:bismuth_dust')
        .itemOutputs('2x gtceu:polonium_bismide_dust')
        .duration(600)
        .circuit(2)
        .EUt((GTValues.VHA[GTValues.UEV]));

    event.recipes.gtceu.assembler(id('zalloy_coil'))
        .itemInputs('8x gtceu:zalloy_double_wire', '8x gtceu:neutronium_foil')
        .inputFluids('gtceu:tritanium 144')
        .itemOutputs('kubejs:zalloy_coil_block')
        .duration(1000)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.assembler(id('magmada_alloy_coil'))
        .itemInputs('8x gtceu:magmada_alloy_double_wire', '8x gtceu:pure_netherite_foil')
        .inputFluids('gtceu:adamantine 144')
        .itemOutputs('kubejs:magmada_alloy_coil_block')
        .duration(1100)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.assembler(id('abyssal_coil'))
        .itemInputs('8x gtceu:filler_wire', '8x gtceu:nyanium_foil') //Need Material from Abyss Harvesting + Refinement
        .inputFluids('gtceu:void 144')
        .itemOutputs('kubejs:abyssal_coil_block')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.assembler(id('extreme_temperature_smelting_casing'))
        .itemInputs('4x gtceu:calamatium_plate', '2x gtceu:astatium_bioselex_carbonite_plate', 'gtceu:enriched_estalt_frame')
        .itemOutputs('2x kubejs:extreme_temperature_smelting_casing')
        .circuit(6)
        .duration(50)
        .EUt(16);

    event.recipes.gtceu.assembler(id('subzero_casing'))
        .itemInputs('4x gtceu:aluminium_plate', '2x gtceu:pure_netherite_plate', 'gtceu:void_frame')
        .itemOutputs('2x kubejs:subzero_casing')
        .circuit(6)
        .duration(50)
        .EUt(16);

    event.recipes.gtceu.compressor(id('reinforced_brimstone_casing'))
        .itemInputs('64x kubejs:brimstone')
        .itemOutputs('kubejs:reinforced_brimstone_casing')
        .duration(320)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.compressor(id('reinforced_cryostone_casing'))
        .itemInputs('64x kubejs:cryostone')
        .itemOutputs('kubejs:reinforced_cryostone_casing')
        .duration(320)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.autoclave(id('brimstone'))
        .itemInputs('kubejs:brimstone', '64x minecraft:netherrack')
        .inputFluids('gtceu:blaze 500')
        .itemOutputs('kubejs:brimstone')
        .chancedOutput('kubejs:brimstone', 6660, 0)
        .duration(240)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.autoclave(id('cryostone'))
        .itemInputs('kubejs:cryostone', '64x minecraft:netherrack')
        .inputFluids('gtceu:liquid_helium 500')
        .itemOutputs('kubejs:cryostone')
        .chancedOutput('kubejs:cryostone', 6660, 0)
        .duration(240)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.mixer(id('thorium_plut_duranide_241'))
        .itemInputs('4x gtceu:thorium_dust', 'gtceu:duranium_dust', '3x gtceu:plutonium_241_dust')
        .itemOutputs('8x gtceu:thorium_plut_duranide_241_dust')
        .circuit(4)
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UV]);

    event.remove({output: 'gtceu:hot_diamane_ingot'});
    event.recipes.gtceu.heat_chamber(id('hot_diamane'))
        .itemInputs('3x gtceu:graphene_dust', '1x gtceu:diamond_dust')
        .inputFluids('gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate 36')
        .itemOutputs('1x gtceu:hot_diamane_ingot')
        .duration(140)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.large_chemical_reactor(id('iridium_iv_oxide'))
        .itemInputs('1x gtceu:iridium_dust')
        .inputFluids('gtceu:oxygen 2000')
        .itemOutputs('3x gtceu:iridium_iv_oxide_dust')
        .duration(228)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.large_chemical_reactor(id('bismuth_iii_oxide'))
        .itemInputs('26x gtceu:bismuth_3_nitrate_dust')
        .inputFluids('minecraft:water 3000')
        .itemOutputs('5x gtceu:bismuth_iii_oxide_dust')
        .outputFluids('gtceu:nitric_acid 6000')
        .duration(328)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.recipes.gtceu.mixer(id('bismuth_iridate'))
        .itemInputs('5x gtceu:bismuth_iii_oxide_dust', '6x gtceu:iridium_iv_oxide_dust')
        .itemOutputs('11x gtceu:bismuth_iridate_dust')
        .duration(412)
        .EUt(GTValues.VA[GTValues.ZPM]);
    
    //UHV,UEV Rotor Holder

    event.shaped(Item.of('gtceu:uhv_rotor_holder'), [
            'NZN',
            'ZCZ',
            'NZN'
        ], {
            N: 'gtceu:small_neutronium_gear',
            Z: 'gtceu:zalloy_gear',
            C: 'gtceu:uhv_machine_hull'
    }).id('start:shaped/uhv_rotor_holder');

    event.shaped(Item.of('gtceu:uev_rotor_holder'), [
        'NZN',
        'ZCZ',
        'NZN'
    ], {
        N: 'gtceu:small_mythrolic_alloy_gear',
        Z: 'gtceu:starium_alloy_gear',
        C: 'gtceu:uev_machine_hull'
    }).id('start:shaped/uev_rotor_holder');

});
