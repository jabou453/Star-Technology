ServerEvents.recipes(event => {
    const id = global.id;

    event.recipes.gtceu.circuit_assembler(id('basic_energy_core'))
        .itemInputs('gtceu:silicon_wafer', '4x #gtceu:capacitors', '2x #gtceu:diodes', 'gtceu:tin_single_cable', '4x minecraft:glass_pane')
        .inputFluids('gtceu:soldering_alloy 12')
        .itemOutputs('kubejs:basic_energy_core')
        .duration(200)
        .EUt(8);

    event.recipes.gtceu.polarizer(id('basic_to_regular_energy_core'))
        .itemInputs('kubejs:basic_energy_core')
        .itemOutputs('kubejs:regular_energy_core')
        .duration(1000)
        .EUt(25);

    event.recipes.gtceu.polarizer(id('regular_to_intermediate_energy_core'))
        .itemInputs('kubejs:regular_energy_core')
        .itemOutputs('kubejs:intermediate_energy_core')
        .duration(2000)
        .EUt(125);

    event.recipes.gtceu.polarizer(id('intermediate_to_advanced_energy_core'))
        .itemInputs('kubejs:intermediate_energy_core')
        .itemOutputs('kubejs:advanced_energy_core')
        .duration(5000)
        .EUt(500);

    event.recipes.gtceu.polarizer(id('advanced_to_elite_energy_core'))
        .itemInputs('kubejs:advanced_energy_core')
        .itemOutputs('kubejs:elite_energy_core')
        .duration(12500)
        .EUt(2000);

    event.recipes.gtceu.polarizer(id('elite_to_ultimate_energy_core'))
        .itemInputs('kubejs:elite_energy_core')
        .itemOutputs('kubejs:ultimate_energy_core')
        .duration(31250)
        .EUt(8000);

    const SolarPanel = (type, material, base, tier, chip, wire, cable, core) => {
        let cell = (base == 'mirror') ? 'mirror' : `photovoltaic_cell_${type - 1}` ;
        event.recipes.gtceu.assembler(id(`solar_generator_${type}`))
            .itemInputs(`gtceu:${material}_frame`, `solarflux:${cell}`, `gtceu:${material}_plate`, `#gtceu:circuits/${tier}`, `2x gtceu:${cable}_single_cable`)
            .inputFluids(`gtceu:soldering_alloy ${144 * type}`)
            .itemOutputs(`solarflux:sp_${type}`)
            .duration(300)
            .EUt(30 * (4 ** type));

        if (type !== 1) {
        let prior = (type == 2) ? 'mirror' : `photovoltaic_cell_${type - 2}` ;
        event.recipes.gtceu.circuit_assembler(id(`photovoltaic_cell_${type - 1}`))
            .itemInputs(`solarflux:${prior}`, `kubejs:${chip}_chip`, `2x #gtceu:circuits/${tier}`, `kubejs:${core}_core`, `6x gtceu:fine_${wire}_wire`)
            .inputFluids(`gtceu:soldering_alloy ${72 * type}`)
            .itemOutputs(`solarflux:photovoltaic_cell_${type}`)
            .duration(400)
            .EUt(30 * (4 ** (type - 1)));
        }
        }
    
    SolarPanel('1','aluminium','mirror','mv','','copper','copper','basic')
    SolarPanel('2','stainless_steel','','hv','silicon','copper','copper','basic')
    SolarPanel('3','titanium','','ev','silicon','copper','copper','basic')
    SolarPanel('4','tungsten_steel','','iv','phosphorus','copper','copper','basic')
    SolarPanel('5','rhodium_plated_palladium','','luv','phosphorus','copper','copper','basic')
    SolarPanel('6','naquadah_alloy','','zpm','naquadah','copper','copper','basic')
    SolarPanel('7','darmstadtium','','uv','naquadah','copper','copper','basic')

});
