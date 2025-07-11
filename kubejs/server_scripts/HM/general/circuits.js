// packmode: hard

ServerEvents.recipes(event => {
    const id = global.id;

    // Removals

    event.remove({ output: /^gtceu:.*electronic_circuit/ });
    event.remove({ output: /^gtceu:.*integrated_circuit/ })
    event.remove({ output: 'gtceu:resistor' });
    event.remove({ output: 'gtceu:diode' });
    event.remove({ output: 'gtceu:transistor' });
    event.remove({ output: 'gtceu:resin_printed_circuit_board' });
    event.remove({ output: 'gtceu:resin_circuit_board' });
    event.remove({ output: 'gtceu:phenolic_printed_circuit_board' });
    event.remove({ output: 'gtceu:phenolic_circuit_board' });

    // Manufacturing Facility Controller
    event.recipes.gtceu.assembler(id('circuit_manufacturing_facility'))
         .itemInputs('1x gtceu:lv_machine_hull', '6x #gtceu:circuits/ulv', '6x kubejs:ulv_robot_arm', '3x kubejs:ulv_conveyor_module',
            '4x gtceu:steel_gear', '2x kubejs:ulv_electric_motor','2x kubejs:ulv_emitter', '4x gtceu:tin_single_cable')
         .inputFluids('gtceu:tin 576')
         .itemOutputs('gtceu:circuit_manufacturing_facility')
        .duration(2400)
        .circuit(4)
        .EUt(8);

    const CircuitFacilityRecipe = (output,recipeID,inputs,fluids,duration,EUt) => {
        event.recipes.gtceu.circuit_facility(id(recipeID))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(output)
            .duration(duration)
            .EUt(EUt);
    };
    // Electronic Circuits Line
    CircuitFacilityRecipe('3x gtceu:vacuum_tube', 'ulv_electronic_circuit', 
        ['thermal:redstone_servo', '6x gtceu:wrought_iron_foil', '3x create:electron_tube', '2x gtceu:fine_red_alloy_wire', 
            '2x gtceu:copper_bolt'], ['gtceu:tin 216'], 400, 7);
    CircuitFacilityRecipe('2x gtceu:basic_electronic_circuit', 'lv_electronic_circuit', 
        ['gtceu:resin_printed_circuit_board','3x gtceu:steel_plate','6x gtceu:resistor','4x gtceu:vacuum_tube',
            '4x gtceu:red_alloy_single_cable','8x gtceu:copper_bolt'], ['gtceu:tin 432'], 600, 30);
    CircuitFacilityRecipe('2x gtceu:good_electronic_circuit', 'mv_electronic_circuit', 
        ['gtceu:resin_printed_circuit_board','3x gtceu:double_steel_plate','6x gtceu:resistor','4x gtceu:diode',
            '4x gtceu:basic_electronic_circuit','4x gtceu:tin_single_cable','10x gtceu:copper_bolt'], 
        ['gtceu:tin 576'], 600, 120);

    // Integrated Circuits Line
    CircuitFacilityRecipe('2x gtceu:basic_integrated_circuit', 'lv_integrated_circuit', 
        ['gtceu:phenolic_printed_circuit_board', 'gtceu:ilc_chip', '3x gtceu:diode', '3x gtceu:resistor', '4x gtceu:fine_copper_wire', 
            '8x gtceu:annealed_copper_bolt'], ['gtceu:soldering_alloy 144'], 400, 30);
    CircuitFacilityRecipe('2x gtceu:good_integrated_circuit', 'mv_integrated_circuit', 
        ['gtceu:phenolic_printed_circuit_board', '2x gtceu:basic_integrated_circuit', 'gtceu:ilc_chip', '8x gtceu:fine_annealed_copper_wire',
            '4x gtceu:resistor', '4x gtceu:diode', '8x gtceu:rose_gold_bolt'], ['gtceu:soldering_alloy 216'], 400, 120);
    CircuitFacilityRecipe('1x gtceu:advanced_integrated_circuit', 'hv_integrated_circuit', 
        ['2x gtceu:good_integrated_circuit', '2x gtceu:ilc_chip', '6x gtceu:fine_gold_wire', '4x gtceu:ram_chip', '6x gtceu:transistor', 
            '2x gtceu:resistor', '2x gtceu:diode', '10x gtceu:gold_bolt'], ['gtceu:soldering_alloy 288', 'gtceu:polyethylene 72'], 400, 480);
        
    // Parts
    const PartsAssemblerFluids = (output,recipeID,inputs,fluid,duration,EUt) => {
    event.recipes.gtceu.assembler(id(recipeID))
        .itemInputs(inputs)
        .inputFluids(fluid)
        .itemOutputs(output)
        .duration(duration)
        .EUt(EUt);
    };
    PartsAssemblerFluids('2x thermal:redstone_servo', 'redstone_servo',['4x create:electron_tube', '2x gtceu:steel_plate', '2x gtceu:red_alloy_bolt'],'gtceu:tin 72', 400, 6);
    PartsAssemblerFluids('3x create:electron_tube', 'electron_tube',['gtceu:glass_tube', 'create:polished_rose_quartz', 'gtceu:red_alloy_bolt', 'gtceu:steel_ring'],'gtceu:tin 72', 400, 4);
    PartsAssemblerFluids('2x gtceu:resistor', 'resistor_coke',['4x minecraft:paper', 'gtceu:coke_dust', '4x gtceu:fine_copper_wire'],'gtceu:glue 100', 400, 7);
    PartsAssemblerFluids('2x gtceu:resistor', 'resistor_carbon',['4x minecraft:paper', 'gtceu:carbon_dust', '4x gtceu:fine_copper_wire'],'gtceu:glue 100', 300, 7);
    PartsAssemblerFluids('3x gtceu:resistor', 'resistor_carbon_annealed',['4x minecraft:paper', 'gtceu:carbon_dust', '4x gtceu:fine_annealed_copper_wire'],'gtceu:glue 100', 300, 7);
    PartsAssemblerFluids('2x gtceu:diode', 'diode_copper',['6x gtceu:fine_copper_wire', '2x gtceu:small_gallium_arsenide_dust', 'gtceu:glass_tube'],'gtceu:polyethylene 144', 400, 30);
    PartsAssemblerFluids('3x gtceu:diode', 'diode_annealed',['6x gtceu:fine_annealed_copper_wire', '2x gtceu:small_gallium_arsenide_dust', 'gtceu:glass_tube'],'gtceu:polyethylene 144', 400, 30);
    PartsAssemblerFluids('6x gtceu:transistor', 'transistor',['4x gtceu:silicon_foil', '3x gtceu:fine_tin_wire', '3x gtceu:fine_silver_wire'],'gtceu:polyethylene 216', 240, 120);

    // Boards
    const BoardsAssemblerFluids = (output,recipeID,inputs,fluid,duration,EUt) => {
    event.recipes.gtceu.assembler(id(recipeID))
        .itemInputs(inputs)
        .inputFluids(fluid)
        .itemOutputs(output)
        .duration(duration)
        .EUt(EUt);
    };
    const BoardsChemicalReactor = (output,recipeID,inputs,fluids,duration,EUt) => {
    event.recipes.gtceu.chemical_reactor(id(recipeID))
        .itemInputs(inputs)
        .inputFluids(fluids)
        .itemOutputs(output)
        .duration(duration)
        .EUt(EUt);
    event.recipes.gtceu.large_chemical_reactor(id(recipeID))
        .itemInputs(inputs)
        .inputFluids(fluids)
        .itemOutputs(output)
        .duration(duration)
        .EUt(EUt);
    };
    BoardsAssemblerFluids('gtceu:resin_circuit_board', 'resin_circuit_board',['gtceu:wood_plate', '2x gtceu:copper_foil'], 'gtceu:glue 250', 200, 4);
    BoardsAssemblerFluids('gtceu:resin_printed_circuit_board', 'resin_printed_circuit_board',['gtceu:resin_circuit_board', '8x gtceu:fine_copper_wire'], 'gtceu:glue 100', 200, 4);
    BoardsAssemblerFluids('gtceu:phenolic_circuit_board', 'phenolic_circuit_board', ['gtceu:wood_plate', '2x gtceu:silver_foil'], 'gtceu:phenol 50', 100, 96);
    BoardsChemicalReactor('gtceu:phenolic_printed_circuit_board', 'phenolic_printed_circuit_board', ['gtceu:phenolic_circuit_board', '12x gtceu:fine_silver_wire'], 'gtceu:sodium_persulfate 300', 300, 320);

});