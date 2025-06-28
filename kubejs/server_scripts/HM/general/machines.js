// packmode: hard

ServerEvents.recipes(event => {
    const id = global.id;

    const Tiers = ['lv','mv','hv','ev','iv','luv','zpm','uv']
    const MachineTypes = [
        'electric_furnace', 'alloy_smelter', 'arc_furnace', 'assembler', 'autoclave', 'bender', 'brewery', 'canner', 'centrifuge', 'chemical_bath',
        'chemical_reactor', 'compressor', 'cutter', 'distillery', 'electrolyzer', 'electromagnetic_separator', 'extractor', 'extruder', 'fermenter',
        'fluid_heater', 'fluid_solidifier', 'forge_hammer', 'forming_press', 'lathe', 'scanner', 'mixer', 'ore_washer', 'packer', 'polarizer', 'laser_engraver',
        'sifter', 'thermal_centrifuge', 'wiremill', 'circuit_assembler', 'macerator', 'gas_collector', 'rock_crusher', 'air_scrubber', 'comustion', 
        'steam_turbine', 'combustion', 'gas_turbine', 'pump', 'fisher', 'block_breaker', 'miner', 'world_accelerator', 'item_collector', 'buffer', 'input_bus', 
        'output_bus', 'input_hatch', 'output_hatch', 'energy_input_hatch', 'energy_output_hatch', 'diode', 'muffler_hatch', 'hermetic_casing', 'charger_4x',
        'machine_hull', 'machine_casing'
    ]

    Tiers.forEach( tier => {
    MachineTypes.forEach( machine => {
            event.remove({ output: `gtceu:${tier}_${machine}` });
            if (machine = 'energy_input_hatch' || 'energy_output_hatch') {
            if (tier !== 'lv' || 'mv' || 'hv'){
                event.remove({ output: `gtceu:${tier}_${machine}_4a` });
                event.remove({ output: `gtceu:${tier}_${machine}_16a` });
            } if (tier == 'uv' || 'zpm' ){
            let priorTier = ( tier == 'uv') ? 'zpm' : 'luv' ;
                event.remove({ id: `gtceu:research_station/1_x_gtceu_${priorTier}_${machine}` });
            }}
    });
        if (tier !== 'lv' || 'mv' || 'hv'){
            event.remove({ output: `gtceu:${tier}_substation_input_hatch_64a` });
            event.remove({ output: `gtceu:${tier}_substation_output_hatch_64a` });
        if (tier !== 'ev'){
            [256,1024,4096].forEach( amps => {
            ['target','source'].forEach( type => {
            event.remove({ output: `gtceu:${tier}_${amps}a_laser_${type}_hatch` });
            });
            });
        }}
        [1,2,4,16].forEach(transformerAmps => {
            event.remove({ output: `gtceu:${tier}_transformer_${transformerAmps}a` });
        });
        [4,8,16].forEach(bufferSize => {
            event.remove({ output: `gtceu:${tier}_battery_buffer_${bufferSize}x` });
        });
        if (tier == 'lv' || 'mv' || 'hv' || 'ev'){
            event.remove({ output: `gtceu:${tier}_super_chest` });
            event.remove({ output: `gtceu:${tier}_super_tank` });
        } if (tier !== 'lv' || 'mv' || 'hv' || 'ev'){
            event.remove({ output: `gtceu:${tier}_quantum_chest` });
            event.remove({ output: `gtceu:${tier}_quantum_tank` });
            event.remove({ output: `gtceu:${tier}_parallel_hatch` });
        }
    });
        event.remove({ id: `gtceu:scanner/1_x_gtceu_iv_energy_input_hatch` });

    event.remove({ output: `gtceu:hv_item_passthrough_hatch` });
    event.remove({ output: `gtceu:hv_fluid_passthrough_hatch` });
    event.remove({ output: `gtceu:me_stocking_input_hatch` });
    event.remove({ output: `gtceu:me_stocking_input_bus` });


        // gt_machines gcym_machines research_based (69/80)

    
});