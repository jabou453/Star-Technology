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
        'steam_turbine', 'combustion', 'gas_turbine', 'pump', 'fisher', 'block_breaker', 'miner', 'world_accelerator', 'item_collector', 'buffer', 'diode',
         'muffler_hatch', 'hermetic_casing', 'charger_4x', 'machine_hull', 'machine_casing', 'energy_input_hatch', 'energy_output_hatch'
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
        if (tier !== 'lv' || 'mv' || 'hv'){
            event.remove({ output: `gtceu:${tier}_substation_input_hatch_64a` }); // wont get recipes in Eta
            event.remove({ output: `gtceu:${tier}_substation_output_hatch_64a` }); // wont get recipes in Eta
        if (tier !== 'ev'){
            [256,1024,4096].forEach( amps => {
            ['target','source'].forEach( type => {
            event.remove({ output: `gtceu:${tier}_${amps}a_laser_${type}_hatch` }); // wont get recipes in Eta
            });
            });
        }}
    //     [1,2,4,16].forEach(transformerAmps => {
    //         event.remove({ output: `gtceu:${tier}_transformer_${transformerAmps}a` });
    //     });
        [4,8,16].forEach(bufferSize => {
            event.remove({ output: `gtceu:${tier}_battery_buffer_${bufferSize}x` });
        });
        if (tier == 'lv' || 'mv' || 'hv' || 'ev'){
            // event.remove({ output: `gtceu:${tier}_super_chest` });
            // event.remove({ output: `gtceu:${tier}_super_tank` });
        } if (tier !== 'lv' || 'mv' || 'hv' || 'ev'){
            // event.remove({ output: `gtceu:${tier}_quantum_chest` });
            // event.remove({ output: `gtceu:${tier}_quantum_tank` });
            event.remove({ output: `gtceu:${tier}_parallel_hatch` }); // wont get recipes in Eta
        }
    });
        event.remove({ id: `gtceu:scanner/1_x_gtceu_iv_energy_input_hatch` });

    // event.remove({ output: `gtceu:hv_item_passthrough_hatch` }); // wont get recipe
    // event.remove({ output: `gtceu:hv_fluid_passthrough_hatch` }); // wont get recipe
    event.remove({ id: `gtceu:assembler/me_stocking_input_hatch` });
    event.remove({ id: `gtceu:assembler/me_stocking_input_bus` });
    // ME Pattern Buffer blanket diabled and ME I/O is in AE-Machinery as a Packmode determinate


        // gt_machines gcym_machines research_based (69/80)

    event.recipes.gtceu.assembler(id(`machine_facility`))
            .itemInputs('gtceu:ulv_assembler','6x kubejs:ulv_robot_arm','4x #gtceu:circuits/lv',
                '2x kubejs:ulv_conveyor_module','2x kubejs:ulv_emitter','2x kubejs:ulv_electric_pump',
                '2x gtceu:steel_gear','2x gtceu:small_damascus_steel_gear')
            .inputFluids('gtceu:tin 864')
            .itemOutputs(`gtceu:machine_facility`)
            .duration(3000)
            .circuit(2)
            .EUt(8);

    const TierMaterials = (tier,wire,cable,rubber,Head,ewire,material,magnetic,Glass,Buzzsaw,pipe,rotor,storageI,storageF,eu,lubricant,solder) => {

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
    AllTierMachine('laser_engraver', [Hull, '2x '+Piston, Emitter, 'gtceu:glass_lens', '3x '+Circuit, '2x '+Cable1x], [Solder+' 144', 'gtceu:distilled_water 1000']);
    AllTierMachine('sifter', [Hull, '2x '+Piston, '2x '+'gtceu:item_filter', '2x '+Circuit, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('thermal_centrifuge', [Hull, '2x '+Motor, '2x '+Circuit, '2x '+Wire4x, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('wiremill', [Hull, '4x '+Motor, '2x '+Circuit, '2x '+Cable1x], [Solder+' 72', Lubricant+' 500']);
    AllTierMachine('macerator', [Hull, Piston, Motor, Head, Gear, '2x '+Circuit, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('gas_collector', [Hull, '4x '+Rod, '2x '+Pump, 'gtceu:fluid_filter', Circuit], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('rock_crusher', [Hull, Piston, Motor, Head, '3x '+Glass, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('fisher', [Hull, '2x '+Piston, '3x '+Motor, '2x '+Circuit, Pump, '32x #forge:string'], [Solder+' 72', RubberF+' 288']);
    AllTierMachine('charger_4x', [Hull, '4x '+PWire4x, Chest, Circuit, '2x '+Cable1x], [Solder+' 144']);
    AllTierMachine('muffler_hatch', [Hull, Motor, Rotor, Cable1x], [Solder+' 144']);
    if (tier === 'lv' || 'mv' || 'hv' || 'ev') {
    AllTierMachine('item_collector', [Hull, '3x '+Rotor, '2x '+Motor, '2x '+Circuit, Cable1x], [Solder+' 144']);
    if (tier !== 'ev') {
    AllTierMachine('buffer', [Hull, Pump, Circuit, Conveyor], [Solder+' 144']);
    AllTierMachine('combustion', [Hull, '2x '+Piston, '2x '+Motor, '2x '+Gear, Circuit, Cable1x], [Solder+' 144']);
    AllTierMachine('steam_turbine', [Hull, '2x '+PipeNormal, '2x '+Rotor, '2x '+Motor, Circuit, Cable1x], [Solder+' 144']);
    AllTierMachine('gas_turbine', [Hull, '2x '+Rotor, '2x '+Motor, Circuit, Pump, '2x '+Cable1x], [Solder+' 144']);
    }}
    AllTierMachine('battery_buffer_4x', [Hull, Chest, `4x gtceu:${cable}_quadruple_wire`, Circuit], [Solder+' 144']);
    AllTierMachine('battery_buffer_8x', [Hull, Chest, `4x gtceu:${cable}_octal_wire`, Circuit], [Solder+' 144']);
    AllTierMachine('battery_buffer_16x', [Hull, Chest, `4x gtceu:${cable}_hex_wire`, Circuit], [Solder+' 144']);
    if (tier !== 'zpm' || 'uv') {
    AllTierMachine('me_assembler', [Hull, '2x '+Arm, '2x '+Circuit, Emitter, Conveyor, Motor, '3x '+Cable1x], [Solder+' 144']);
    }

    //Assmebler 
    // 'energy_input_hatch', 
    // 'energy_output_hatch', 
    // transformers

    }

    TierMaterials('lv','copper','tin','rubber','minecraft:diamond','gold','steel','steel','#forge:glass','gtceu:cobalt_brass_buzz_saw_blade','bronze','tin','wood_crate','wood_drum',30,'lubricant','soldering_alloy');
    TierMaterials('mv','cupronickel','copper','rubber','minecraft:diamond','electrum','aluminium','steel','gtceu:tempered_glass','gtceu:vanadium_steel_buzz_saw_blade','steel','steel','bronze_crate','bronze_drum',120,'lubricant','soldering_alloy');
    TierMaterials('hv','kanthal','gold','silicone_rubber','gtceu:diamond_grinding_head','blue_alloy','stainless_steel','neodymium','gtceu:tempered_glass','gtceu:red_steel_buzz_saw_blade','stainless_steel','black_steel','steel_crate','steel_drum',480,'lubricant','soldering_alloy');
    TierMaterials('ev','nichrome','aluminium','silicone_rubber','gtceu:diamond_grinding_head','platinum','titanium','neodymium','gtceu:tempered_glass','ultimet_buzz_saw_blade','titanium','hsla_steel','aluminium_crate','aluminium_drum',1920,'lubricant','soldering_alloy');

    // Base Machines (assemblyLine,mk1,mk2,mk3,transformer,substation,fluidDrills,largeMiners,bedrockMiners all Theta+)
    // [
    //     'bronze_large_boiler','steel_large_boiler','titanium_large_boiler','tungstensteel_large_boiler','electric_blast_furnace','large_chemical_reactor','implosion_compressor','pyrolyse_oven','multi_smelter',
    //     'cracker','distillation_tower','vacuum_freezer','assembly_line','luv_fusion_reactor','zpm_fusion_reactor','uv_fusion_reactor','mv_fluid_drilling_rig','hv_fluid_drilling_rig','ev_fluid_drilling_rig',
    //     'ev_large_miner','iv_large_miner','luv_large_miner','gtceu:cleanroom','gtceu:filter_casing','gtceu:sterilizing_filter_casing','large_combustion_engine','extreme_combustion_engine','steam_large_turbine',
    //     'gas_large_turbine','plasma_large_turbine','active_transformer','power_substation','mv_bedrock_ore_miner','hv_bedrock_ore_miner','ev_bedrock_ore_miner'
    // ].forEach(gtMachine => {
    //     event.remove({output: `gtceu:${gtMachine}` });
    // });

    // // GCYM (abs needs recipe in Eta rest in Theta+) (large circuit never)
    // [
    //     'large_maceration_tower','large_chemical_bath','large_centrifuge','large_mixer','large_electrolyzer','large_electromagnet','large_packer','large_assembler','large_circuit_assembler','large_arc_smelter',
    //     'large_engraving_laser','large_sifting_funnel','alloy_blast_smelter','large_autoclave','large_material_press','large_brewer','large_cutter','large_distillery','large_extractor','large_extruder','large_solidifer',
    //     'large_wiremill','mega_blast_furnace','mega_vacuum_freezer'
    // ].forEach(gcymMachine => {
    //     event.remove({output: `gtceu:${gcymMachine}` });
    // });

    // // Research Machines (data access needs recipe in Eta rest in Theta+)
    // [
    //     'research_station','object_holder','data_bank', 'network_switch','high_performance_computation_array','computation_transmitter_hatch','computation_receiver_hatch','data_transmitter_hatch','data_receiver_hatch',
    //     'data_access_hatch','advanced_data_access_hatch','hpca_empty_component','hpca_computation_component','hpca_advanced_computation_component','hpca_heat_sink_component','hpca_active_cooler_component','hpca_bridge_component'
    // ].forEach(GTresearchMachine => {
    //     event.remove({output: `gtceu:${GTresearchMachine}` });
    // });

    // Gate (Not Eta)
    // large_quantum_compressor, dimensional_finder, runic_circuitry_assembling_station, gate_assembly, runic_inscriber_manipulate, large_rotor_machine, stargate_component_assembly

    // Adv Non-Gate (Not Eta)
    // folding_akreyrium_stabilizer, uhv_auxiliary_boosted_fusion_reactor, auxiliary_boosted_fusion_casing_mk1, auxiliary_fusion_coil_mk1, bacterial_breeding_vat, bacterial_runic_mutator, 
    // bacterial_hydrocarbon_harvester, chemical_plant, mega_abs, super_compact_heat_chamber, component_part_assembly, heat_chamber, super_pressure_heat_chamber,
    // cryostate_quantum_chiller, exotic_gas_siphon, cyclonic_sifter, draco_circuit_assembler, draco_infusion, super_compact_heat_chamber, injection_mixer, manifold_centrifuge, bulk_ore_processing_array,
    // hellforge, molten_destabilizer, vibration_laser_engraver, hpca_nanofluidic_heat_sink_component, sterile_cleaning_maintenance_hatch, redstone_variadic_interface, wireless

    // KubeJS Cubes
    // multiblock_upgrade_kit
    // t_large_ (bender, centrifuge, electrolyzer, extruder, forming_press, lathe, macerator, mixer, ore_washer, sifter, thermal_centrifuge, wiremill, autoclave), rock_crusher

    // Resource Gen
    // Not Eta: dimensional_destabilizer, rock_sifter, large_sieve, void_excavator, cobbleworks
    // void_extraactor, greenhouse, industrial_barrel, mechanical_sieve, rock_fltrator, electric_ore_factory, ore_processing_plant, nuclear_reactor

});