ServerEvents.recipes(event => {
    const id = global.id;

    // Abyss Harvester Controller + Misc

        // === //

    event.recipes.gtceu.assembler(id('voidic_reinforced_mesh'))
        .itemInputs('1x kubejs:ancient_netherite_reinforced_mesh', '4x gtceu:void_rod', '1x gtceu:void_ingot')
        .inputFluids('gtceu:pure_netherite 576')
        .itemOutputs('1x kubejs:voidic_reinforced_mesh')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.UEV]);

    // Abyss Harvesting

        // High Entropy Voidic Excression

        // Moderate Entropy Voidic Excression

        // Low Entropy Voidic Excression

    // Processing Line

    const EntropyVoid = (type,quantityBuckets,outputs) => {
        event.recipes.gtceu.cyclonic_sifter(id(`${type}_entropy_voidic_excression`))
            .inputFluids(`gtceu:${type}_entropy_voidic_excression ${quantityBuckets * 1000}`)
            .chancedInput('1x kubejs:voidic_reinforced_mesh', 250, -50)
            .outputFluids(outputs)
            .duration(quantityBuckets * 6)
            .EUt(GTValues.VHA[GTValues.UIV]);
    };
    EntropyVoid('high',200,['gtceu:excited_void_entangled_quantum_slurry 1000','gtceu:moderate_entropy_voidic_excression 25000']);
    EntropyVoid('moderate',150,['gtceu:active_void_entangled_quantum_slurry 1000','gtceu:low_entropy_voidic_excression 25000']);
    EntropyVoid('low',100,['gtceu:dormant_void_entangled_quantum_slurry 1000']);

    const QuantumDecomp = (slurryType, state1, state2) => {
        event.recipes.gtceu.manifold_centrifuge(id(`${slurryType}_void_entangled_quantum_slurry`))
            .inputFluids(`gtceu:${slurryType}_void_entangled_quantum_slurry 1000`)
            .outputFluids(`gtceu:${state1}_state_void_sludge 500`,`gtceu:${state2}_state_void_sludge 500`)
            .duration(125)
            .EUt(GTValues.V[GTValues.UEV]);
    };
    QuantumDecomp('excited','gamma','zeta');
    QuantumDecomp('active','beta','epsilon');
    QuantumDecomp('dormant','alpha','delta');

    const VoidState = (state, time) => {
        event.recipes.gtceu.centrifuge(id(`${state}_sludge_to_residue`))
            .inputFluids(`gtceu:${state}_state_void_sludge 1000`)
            .outputFluids(`gtceu:${state}_state_void_residue 800`, 'gtceu:voidic_waste_residue 200')
            .duration(time)
            .EUt(GTValues.VA[GTValues.UHV]);
    };
    VoidState('alpha', 380); // Alpha Last 38 Days
    VoidState('beta', 304); // Beta Last 304 Days
    VoidState('gamma', 570); // Gamma Last 57 Days
    VoidState('delta', 660); // Delta Last 66 Days
    VoidState('epsilon', 890); // Epsilon Last 89 Days
    VoidState('zeta', 10000); // Zeta will Last 10000 Days /j

    event.recipes.gtceu.injection_mixer(id('order_centric_void'))
        .inputFluids('gtceu:alpha_state_void_residue 1000','gtceu:beta_state_void_residue 1000','gtceu:gamma_state_void_residue 1000')
        .outputFluids('gtceu:order_centric_void 500')
        .duration(160)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.injection_mixer(id('chaos_centric_void'))
        .inputFluids('gtceu:delta_state_void_residue 1000','gtceu:epsilon_state_void_residue 1000','gtceu:zeta_state_void_residue 1000')
        .outputFluids('gtceu:chaos_centric_void 500')
        .duration(160)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.manifold_centrifuge(id('voidic_waste_residue'))
        .inputFluids('gtceu:voidic_waste_residue 1000')
        .itemOutputs('5x gtceu:small_rhenium_dust', '2x gtceu:tiny_echo_shard_dust')
        .outputFluids('gtceu:naquadria_waste 6250', 'gtceu:molten_ore_mixture 5000')
        .duration(480)
        .EUt(GTValues.VHA[GTValues.UIV]);

    // Voidic Metals
    const VoidicMetal = (Material,Center,First,Second,VoidType,PerSeconds) => {
    event.recipes.gtceu.draco_infusion(id(`${Material}_dust`))
        .itemInputs(Center, First, Second, Second, First, First, Second)
        .inputFluids(`gtceu:${VoidType}_centric_void 1000`)
        .itemOutputs(`7x gtceu:${Material}_dust`)
        .duration(PerSeconds * 7 * 20)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.replaceInput({id: `gtceu:electric_blast_furnace/blast_${Material}_gas`},
            Fluid.of('gtceu:krypton 10'),
            Fluid.of('gtceu:xenon 10')
        );
    }

    VoidicMetal('rhexis','gtceu:ancient_netherite_ingot', 'minecraft:netherite_ingot', 'gtceu:titanium_tungsten_carbide_ingot', 'chaos', 9.45);
    VoidicMetal('xeproda','gtceu:void_ingot', 'gtceu:black_steel_ingot', 'gtceu:enriched_naquadah_ingot', 'chaos', 11.35);
    VoidicMetal('chalyblux','gtceu:hafnium_ingot', 'gtceu:rose_gold_ingot', 'gtceu:platinum_ingot', 'order', 8.65);

});