ServerEvents.recipes(event => {
    const id = global.id;

    const assembler = (id1, output, input, eu) => {
        event.recipes.gtceu.assembler(id(`${id1}`))
            .itemInputs(input)
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`${output}`)
            .duration(400)
            .EUt(eu);
    }

    const assembler_rem = (id1, output, input, eu) => {
        event.remove({output: `${output}`})
        assembler(id1, output, input, eu)
    }

    const extended = (item, input) => {
        assembler_rem(`extended_${item}`, `expatternprovider:ex_${item}`, [`ae2:${input}`, '4x ae2:engineering_processor', '#gtceu:circuits/ev', '6x gtceu:double_fluix_steel_plate'], 2048);
    }

    ['interface', 'pattern_provider'].forEach(type => {
        assembler_rem(`mega_${type}`, `megacells:mega_${type}`, [`ae2:${type}`, '4x ae2:calculation_processor', '#gtceu:circuits/hv', '6x gtceu:double_black_steel_plate'], 512);
    });
    
    ['interface', 'pattern_provider', 'molecular_assembler', 'drive', 'io_port'].forEach(type => {
            extended(`${type}`, `${type}`);
    });
    
    ['import_bus', 'export_bus'].forEach(type => {
        extended(`${type}_part`, `${type}`);
    });

    ['import_bus', 'export_bus', 'import_hatch', 'export_hatch'].forEach(type => {
        event.remove({id: `gtceu:assembler/me_${type}`})
    });

    ['input_bus', 'output_bus', 'input_hatch', 'output_hatch'].forEach(type => {
        assembler(`me_${type}`, `gtceu:me_${type}`, [`gtceu:ev_${type}`, '#gtceu:circuits/ev', 'ae2:fluix_smart_cable'], 8192);
    });

    event.replaceInput({ id: 'ae2:network/blocks/spatial_io_pylon'}, 'ae2:fluix_crystal','gtceu:fluix_steel_frame')

    event.recipes.gtceu.wiremill(id('fluix_glass_cables'))
        .itemInputs('ae2:quartz_fiber', 'gtceu:fluix_steel_foil')
        .itemOutputs('ae2:fluix_glass_cable')
        .duration(40)
        .EUt(16);
    
    const shapedRecipeRem = (output, pattern, key) => {
        event.remove({output: `${output}`});
        event.shaped(`${output}`, pattern, key).id(`start:shaped/ae/${output.split(':')[1]}`);
    }


    shapedRecipeRem('ae2:energy_cell', [
        'ABA',
        'BCB',
        'ABA'], {
        A: 'gtceu:double_silicon_plate',
        B: 'gtceu:diamond_skystone_alloy_plate',
        C: '#gtceu:batteries/lv'
    });

    shapedRecipeRem('ae2:spatial_io_port', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: 'thermal:obsidian_glass',
        B: 'ae2:fluix_glass_cable',
        C: 'ae2:io_port',
        D: 'gtceu:sky_steel_plate',
        E: 'ae2:engineering_processor'
    });
    
    shapedRecipeRem('ae2:quantum_link', [
        'ABA',
        'BCB',
        'ABA'],{
        A: 'gtceu:double_tungsten_plate',
        B: 'gtceu:tungsten_rod',
        C: 'thermal:enderium_glass'
    });

    shapedRecipeRem('ae2:controller', [
        'HFH',
        'FCF',
        'HFH'
    ], {
        C: 'gtceu:star_steel_frame',
        F: 'ae2:fluix_crystal',
        H: 'ae2:engineering_processor'
    });

    shapedRecipeRem('ae2:molecular_assembler', [
            'HFH',
            'JCB',
            'HFH'
        ], {
            C: 'minecraft:crafting_table',
            F: 'ae2:quartz_glass',
            H: 'gtceu:star_steel_plate',
            J: 'ae2:annihilation_core',
            B: 'ae2:formation_core'
        });

    shapedRecipeRem('ae2:pattern_provider', [
            'HFH',
            'J B',
            'HFH'
        ], {
            F: 'minecraft:crafting_table',
            H: 'gtceu:star_steel_plate',
            J: 'ae2:annihilation_core',
            B: 'ae2:formation_core'
        });

    shapedRecipeRem('ae2:crafting_unit', [
            'HFH',
            'BCB',
            'HFH'
        ], {
            C: 'ae2:logic_processor',
            F: 'ae2:calculation_processor',
            H: 'gtceu:star_steel_plate',
            B: 'ae2:fluix_glass_cable'
        });

    shapedRecipeRem('ae2:energy_acceptor', [
            'HFH',
            'FCF',
            'HFH'
        ], {
            C: '#forge:ingots/copper',
            F: 'ae2:quartz_glass',
            H: 'gtceu:star_steel_plate',
        });

    shapedRecipeRem('ae2:interface', [
            'HFH',
            'J B',
            'HFH'
        ], {
            F: '#forge:glass',
            H: 'gtceu:star_steel_plate',
            J: 'ae2:annihilation_core',
            B: 'ae2:formation_core'
        });

    shapedRecipeRem('ae2:drive', [
            'HFH',
            'B B',
            'HFH'
        ], {
            F: 'ae2:engineering_processor',
            H: 'gtceu:star_steel_plate',
            B: 'ae2:fluix_glass_cable'
        });

    shapedRecipeRem('ae2:condenser', [
            'HFH',
            'FCF',
            'HFH'
        ], {
            C: 'ae2:fluix_dust',
            F: '#forge:glass',
            H: 'gtceu:star_steel_plate',
        });

    shapedRecipeRem('ae2:cell_workbench', [
            'ABA',
            'CEC',
            'CCC'
        ], {
            A: '#minecraft:wool',
            B: 'ae2:calculation_processor',
            C: 'gtceu:star_steel_plate',
            E: '#forge:chests/wooden'
        });

    shapedRecipeRem('ae2:io_port', [
            'AAA',
            'BCB',
            'DED'
        ], {
            A: '#forge:glass',
            B: 'ae2:drive',
            C: 'ae2:fluix_glass_cable',
            D: 'gtceu:star_steel_plate',
            E: 'ae2:engineering_processor'
        });

    shapedRecipeRem('ae2:chest', [
            'ABA',
            'C C',
            'DED'
        ], {
            A: '#forge:glass',
            B: 'ae2:terminal',
            C: 'ae2:fluix_glass_cable',
            D: 'gtceu:star_steel_plate',
            E: '#forge:ingots/copper'
        });

    assembler_rem('quantum_ring', 'ae2:quantum_ring', ['gtceu:tungsten_carbide_frame', 'gtceu:ev_field_generator', 'gtceu:ev_emitter', 'gtceu:quantum_star', '6x gtceu:double_fluix_steel_plate'], 2048);

    event.replaceInput({ id: 'ae2:network/parts/tunnels_me'},'minecraft:iron_ingot','gtceu:certus_quartz_skystone_alloy_plate');
    event.replaceInput({ id: 'ae2:misc/tiny_tnt'},'minecraft:gunpowder','gtceu:gelled_toluene');
    event.replaceInput({ id: 'ae2:network/crafting/patterns_blank'},'minecraft:iron_ingot','gtceu:diamond_skystone_alloy_plate');
 
    shapedRecipeRem('ae2:memory_card',[
        '   ',
        'ABB',
        'CDC'],{
            A: 'ae2:calculation_processor',
            B: 'gtceu:diamond_skystone_alloy_plate',
            C: 'gtceu:gold_skystone_alloy_plate',
            D: 'minecraft:redstone'
        }
    );

    ['lv', 'mv', 'hv', 'ev', 'iv', 'luv'].forEach(voltage => {
        event.shaped(`gtceu:${voltage}_me_core_assembler`, [
            'ABC',
            'DED',
            'CCF'],{
            A: `gtceu:${voltage}_emitter`,
            B: `gtceu:${voltage}_conveyor_module`,
            C: `#gtceu:circuits/${voltage}`,
            D: `gtceu:${voltage}_robot_arm`,
            E: `gtceu:${voltage}_machine_hull`,
            F: `gtceu:${voltage}_electric_motor`
        }).id(`start:shaped/${voltage}_me_core_assembler`);
        
        event.shaped(`gtceu:${voltage}_me_circuit_assembler`, [
            'ABC',
            'DEC',
            'AAF'],{
            A: `#gtceu:circuits/${voltage}`,
            B: `gtceu:${voltage}_sensor`,
            C: `gtceu:${voltage}_robot_arm`,
            D: `gtceu:${voltage}_emitter`,
            E: `gtceu:${voltage}_machine_hull`,
            F: `gtceu:${voltage}_conveyor_module`
        }).id(`start:shaped/${voltage}_me_circuit_assembler`);
    });

    event.shaped('2x kubejs:fluix_steel_casing', [
        'ABA',
        'ACA',
        'ADA'],{
        A: 'gtceu:double_fluix_steel_plate',
        B: '#forge:tools/hammers',
        C: 'gtceu:fluix_steel_frame',
        D: '#forge:tools/wrenches'
    });

    event.recipes.gtceu.assembler(id('fluix_steel_casing'))
        .itemInputs('6x gtceu:double_fluix_steel_plate', 'gtceu:fluix_steel_frame')
        .itemOutputs('2x kubejs:fluix_steel_casing')
        .duration(50)
        .EUt(16);

    event.recipes.gtceu.assembler(id('precise_me_circuit_assembler'))
        .itemInputs('kubejs:fluix_steel_casing', '2x gtceu:iv_robot_arm', 'gtceu:iv_emitter', '2x #gtceu:circuits/iv',
            '16x gtceu:fine_vanadium_gallium_wire', '8x gtceu:uranium_triplatinum_single_wire')
        .itemOutputs('gtceu:precise_me_circuit_assembler')
        .duration(600)
        .EUt(8192);


    event.recipes.gtceu.assembler(id('precise_me_core_assembler'))
        .itemInputs('kubejs:fluix_steel_casing', '2x gtceu:iv_conveyor_module', 'gtceu:iv_robot_arm', '2x #gtceu:circuits/iv',
            '16x gtceu:fine_tantalum_wire', '8x gtceu:mercury_barium_calcium_cuprate_single_wire')
        .itemOutputs('gtceu:precise_me_core_assembler')
        .duration(600)
        .EUt(8192);

});