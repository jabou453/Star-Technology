// packmode: hard

ServerEvents.recipes(event => {
    const id = global.id;

    const Tiers = ['lv','mv','hv','ev','iv','luv','zpm','uv']

        event.remove({ output: /gtceu:arc_furnace\/arc_lv.*/ });
        event.remove({ output: /gtceu:macerate\/macerate_lv.*/ });
        event.remove({ output: /gtceu:arc_furnace\/arc_mv.*/ });
        event.remove({ output: /gtceu:macerate\/macerate_mv.*/ });
        event.remove({ output: /gtceu:arc_furnace\/arc_hv.*/ });
        event.remove({ output: /gtceu:macerate\/macerate_hv.*/ });
        event.remove({ output: /gtceu:arc_furnace\/arc_ev.*/ });
        event.remove({ output: /gtceu:macerate\/macerate_ev.*/ });
        event.remove({ output: /gtceu:arc_furnace\/arc_iv.*/ });
        event.remove({ output: /gtceu:macerate\/macerate_iv.*/ });
        event.remove({ output: /gtceu:arc_furnace\/arc_luv.*/ });
        event.remove({ output: /gtceu:macerate\/macerate_luv.*/ });
        event.remove({ output: /gtceu:arc_furnace\/arc_zpm.*/ });
        event.remove({ output: /gtceu:macerate\/macerate_zpm.*/ });
        event.remove({ output: /gtceu:arc_furnace\/arc_uv.*/ });
        event.remove({ output: /gtceu:macerate\/macerate_uv.*/ });

    const MachineTypes = [
        'electric_furnace', 'alloy_smelter', 'arc_furnace', 'assembler', 'autoclave', 'bender', 'brewery', 'canner', 'centrifuge', 'chemical_bath',
        'chemical_reactor', 'compressor', 'cutter', 'distillery', 'electrolyzer', 'electromagnetic_separator', 'extractor', 'extruder', 'fermenter',
        'fluid_heater', 'fluid_solidifier', 'forge_hammer', 'forming_press', 'lathe', 'scanner', 'mixer', 'ore_washer', 'packer', 'polarizer', 'laser_engraver',
        'sifter', 'thermal_centrifuge', 'wiremill', 'circuit_assembler', 'macerator', 'gas_collector', 'rock_crusher', 'air_scrubber', 
        'steam_turbine', 'combustion', 'gas_turbine', 'pump', 'fisher', 'block_breaker', 'miner', 'world_accelerator', 'item_collector', /*'buffer', 'diode',*/ 'muffler_hatch', 'hermetic_casing', 'charger_4x',
        'machine_hull', 'machine_casing', 'energy_input_hatch', 'energy_output_hatch'
    ]

    Tiers.forEach( tier => {
    MachineTypes.forEach( machine => {
            event.remove({ output: `gtceu:${tier}_${machine}` });
            if (machine = 'energy_input_hatch' || 'energy_output_hatch') {
            if (tier !== 'lv' || 'mv' || 'hv'){
    //             event.remove({ output: `gtceu:${tier}_${machine}_4a` });
    //             event.remove({ output: `gtceu:${tier}_${machine}_16a` });
            } if (tier == 'uv' || 'zpm' ){
            let priorTier = ( tier == 'uv') ? 'zpm' : 'luv' ;
                event.remove({ id: `gtceu:research_station/1_x_gtceu_${priorTier}_${machine}` });
            }}
    });
    //     if (tier !== 'lv' || 'mv' || 'hv'){
    //         event.remove({ output: `gtceu:${tier}_substation_input_hatch_64a` });
    //         event.remove({ output: `gtceu:${tier}_substation_output_hatch_64a` });
    //     if (tier !== 'ev'){
    //         [256,1024,4096].forEach( amps => {
    //         ['target','source'].forEach( type => {
    //         event.remove({ output: `gtceu:${tier}_${amps}a_laser_${type}_hatch` });
    //         });
    //         });
    //     }}
    //     [1,2,4,16].forEach(transformerAmps => {
    //         event.remove({ output: `gtceu:${tier}_transformer_${transformerAmps}a` });
    //     });
    //     [4,8,16].forEach(bufferSize => {
    //         event.remove({ output: `gtceu:${tier}_battery_buffer_${bufferSize}x` });
    //     });
    //     if (tier == 'lv' || 'mv' || 'hv' || 'ev'){
    //         event.remove({ output: `gtceu:${tier}_super_chest` });
    //         event.remove({ output: `gtceu:${tier}_super_tank` });
    //     } if (tier !== 'lv' || 'mv' || 'hv' || 'ev'){
    //         event.remove({ output: `gtceu:${tier}_quantum_chest` });
    //         event.remove({ output: `gtceu:${tier}_quantum_tank` });
    //         event.remove({ output: `gtceu:${tier}_parallel_hatch` });
    //     }
    });
        event.remove({ id: `gtceu:scanner/1_x_gtceu_iv_energy_input_hatch` });

    // event.remove({ output: `gtceu:hv_item_passthrough_hatch` });
    // event.remove({ output: `gtceu:hv_fluid_passthrough_hatch` });
    event.remove({ output: `gtceu:me_stocking_input_hatch` });
    event.remove({ output: `gtceu:me_stocking_input_bus` });
    // ME Pattern Buffer blanket diabled and ME I/O is in AE-Machinery as a Packmode determinate


        // gt_machines gcym_machines research_based (69/80)

    const TierMaterials = (tier,wire,cable,plastic,rubber,Head,ewire,material,magnetic,Glass,Buzzsaw,pipe,rotor,storageI,storageF,eu,lubricant,solder) => {

        const Circuit = `#gtceu:circuits/${tier}` ;
        const Arm = `gtceu:${tier}_robot_arm` ; 
        const Conveyor = `gtceu:${tier}_conveyor_module` ;
        const Motor = `gtceu:${tier}_electric_motor` ;
        const Pump = `gtceu:${tier}_electric_pump` ;
        const Piston = `gtceu:${tier}_electric_piston` ;
        const Emitter = `gtceu:${tier}_emitter` ;
        const Sensor = `gtceu:${tier}_sensor` ;
        const EWire1x = `gtceu:${ewire}_single_wire` ;
        const Wire2x = `gtceu:${wire}_double_wire` ;
        const Wire4x = `gtceu:${wire}_quadruple_wire` ;
        const Hull = `gtceu:${tier}_machine_hull` ;
        const Cable1x = `gtceu:${cable}_single_cable` ;
        const Cable4x = `gtceu:${cable}_quadruple_cable` ;
        const PWire2x = `gtceu:${cable}_double_wire` ;
        const PWire4x = `gtceu:${cable}_quadruple_wire` ;
        const Plate = `gtceu:${material}_plate` ;
        const Rod = `gtceu:${material}_rod` ;
        const Gear = `gtceu:${material}_gear` ;
        const RodM = `gtceu:${magnetic}_rod` ;
        const Spring = `gtceu:${wire}_spring` ;
        const Rotor = `gtceu:${rotor}_rotor` ;
        const PipeNormal = `gtceu:${pipe}_normal_fluid_pipe`
        const Chest = `gtceu:${storageI}` ;
        const Tank = `gtceu:${storageF}` ;
        const RubberF = `gtceu:${rubber}` ;
        const Solder = `gtceu:${solder}` ;
        const Lubricant = `gtceu:${lubricant}` ;

    const AllTierMachine = (type,inputs,fluids) => {

        event.recipes.gtceu.simple_machine_facility(id(`${tier}_${type}`))
            .itemInputs(inputs)
            .inputFluids(fluids)
            .itemOutputs(`gtceu:${tier}_${type}`)
            .duration(100)
            .EUt(eu);

    }; 

    AllTierMachine('electric_furnace', [Hull, '2x '+Circuit, '4x '+Wire2x, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('alloy_smelter', [Hull, '2x '+Circuit, '4x '+Wire4x, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('arc_furnace', [Hull, '2x '+Circuit, 'gtceu:graphite_dust', '3x '+Plate, '2x '+Cable4x], [Solder+' 144']);
    AllTierMachine('assembler', [Hull, '2x '+Arm, '2x '+Conveyor, '2x '+Circuit, '2x '+Cable1x], [Solder+' 72', Lubricant+' 500']);
    AllTierMachine('autoclave', [Hull, '4x '+Plate, Glass, '2x '+Circuit, Pump], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('bender', [Hull, '2x '+Piston, Plate, '2x '+Circuit, '2x '+Motor, Cable1x], [Solder+' 72', Lubricant+' 500']);
    AllTierMachine('brewery', [Hull, '2x '+Glass, '2x '+Circuit, Pump, Spring, '2x '+Cable1x], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('canner', [Hull, '3x '+Glass, '2x '+Circuit, Pump, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('centrifuge', [Hull, '4x '+Circuit, '2x '+Motor, '2x '+Cable1x], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('chemical_bath', [Hull, '2x '+Glass, '2x '+Conveyor, '2x '+Circuit, Pump, Cable1x], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('chemical_reactor', [Hull, '2x '+Glass, '2x '+Circuit, Rotor, Motor, '2x '+Cable1x], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('compressor', [Hull, '2x '+Plate, '2x '+Piston, '2x '+Circuit, '2x '+Cable1x], [Solder+' 72', Lubricant+' 500']);
    AllTierMachine('cutter', [Hull, Glass, Conveyor, Buzzsaw, '2x '+Circuit, Motor, '2x '+Cable1x], [Solder+' 72', Lubricant+' 500']);
    AllTierMachine('distillery', [Hull, '2x '+Glass, '2x '+Pump, '2x '+Circuit, Spring, Cable1x], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('electrolyzer', [Hull, Motor, '2x '+EWire1x, Glass, '2x '+Circuit, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('electromagnetic_separator', [Hull, '2x '+Wire2x, Conveyor, Circuit, '2x '+RodM, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('extractor', [Hull, '2x '+Glass, Piston, Pump, '2x '+Circuit, '2x '+Cable1x], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('extruder', [Hull, '4x '+Wire4x, Piston, '2x '+Circuit, PipeNormal], [Solder+' 144']);
    AllTierMachine('fermenter', [Hull, '2x '+Glass, Circuit, Pump, '4x '+Cable1x], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('fluid_heater', [Hull, '2x '+Pump, '2x '+Wire4x, Glass, Circuit, '2x '+Cable1x], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('fluid_solidifier', [Hull, '2x '+Pump, Glass, '2x '+Circuit, Chest, '2x '+Cable1x], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('forge_hammer', [Hull, '2x '+Piston, '2x '+Circuit, 'minecraft:anvil', '3x '+Cable1x], [Solder+' 144']);
    AllTierMachine('forming_press', [Hull, '2x '+Piston, '2x '+Circuit, '4x '+Cable1x], [Solder+' 144']);
    AllTierMachine('lathe', [Hull, '2x '+Circuit, Motor, Head, Piston, '2x '+Cable1x], [Solder+' 72', Lubricant+' 500']);
    AllTierMachine('scanner', [Hull, '4x '+Circuit, Emitter, Sensor, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('mixer', [Hull, '4x '+Glass, Rotor, Motor, '2x '+Circuit], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('ore_washer', [Hull, '2x '+Rotor, Glass, '2x '+Circuit, Motor, '2x '+Cable1x], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('packer', [Hull, '2x '+Chest, Arm, Conveyor, '2x '+Circuit, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('polarizer', [Hull, '4x '+PWire2x, '2x '+RodM, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('laser_engraver', [Hull, '2x '+Piston, Emitter, '3x '+Circuit, '2x '+Cable1x], [Solder+' 144', 'gtceu:distilled_water 1000']);
    AllTierMachine('sifter', [Hull, '2x '+Piston, '2x '+'gtceu:item_filter', '2x '+Circuit, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('thermal_centrifuge', [Hull, '2x '+Motor, '2x '+Circuit, '2x '+Wire4x, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('wiremill', [Hull, '4x '+Motor, '2x '+Circuit, '2x '+Cable1x], [Solder+' 72', Lubricant+' 500']);
    AllTierMachine('macerator', [Hull, Piston, Motor, Head, Gear, '2x '+Circuit, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('gas_collector', [Hull, '4x '+Rod, '2x '+Pump, 'gtceu:fluid_filter', Circuit], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('rock_crusher', [Hull, Piston, Motor, Head, '3x '+Glass, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('combustion', [Hull, '2x '+Piston, '2x '+Motor, '2x '+Gear, Circuit, Cable1x], [Solder+' 144']);
    AllTierMachine('steam_turbine', [Hull, '2x '+PipeNormal, '2x '+Rotor, '2x '+Motor, Circuit, Cable1x], [Solder+' 144']);
    AllTierMachine('gas_turbine', [Hull, '2x '+Rotor, '2x '+Motor, Circuit, Pump, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('fisher', [Hull, '2x '+Piston, '3x '+Motor, '2x '+Circuit, Pump], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('item_collector', [Hull, '3x '+Rotor, '2x '+Motor, '2x '+Circuit, Cable1x], [Solder+' 144']);
    AllTierMachine('charger_4x', [Hull, '4x '+PWire4x, Chest, Circuit, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('muffler_hatch', [Hull, Motor, Rotor, Cable1x], [Solder+' 144']);
    // 'diode', 
    // 'buffer',

    //Assmebler 
    // 'energy_input_hatch', 
    // 'energy_output_hatch', 
    // 'hermetic_casing', 
    // 'machine_hull', 
    // 'machine_casing'  

    }

    TierMaterials('lv','copper','tin','glue','rubber','minecraft:diamond','gold','steel','steel','#forge:glass','gtceu:cobalt_brass_buzz_saw_blade','bronze','tin','wood_crate','wood_drum',30,'lubricant','soldering_alloy');
    
});