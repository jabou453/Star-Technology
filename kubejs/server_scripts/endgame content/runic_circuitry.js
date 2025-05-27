
ServerEvents.recipes(event => {

    const id = global.id;

    // Runic Convergence Infusion Production

    /*
        *Nr*(SO₄)₃(OH)₂ - Netherite Trisulfate Complex
        [*Nr*(NH₃)₆]SO₄ - Netherite Hexammine Sulfate
        *Nr*₂N₃O₄ - Voidic Nitride
        *Nr*(OH)₄ - Netherite Tetrahydroxide
        *Nr*FSi₂O₄ - Astral Fluorosilicate
        *Nr*₃N₃Si₂BO8F - Primordial Nitrosilicate
        2Mg₃N₂ - Magnesium Nitride
        *Nr*₃Mg₆N₇Si₂BO8F - Runic Convergence Infusion
    */

    const lcr = event.recipes.gtceu.large_chemical_reactor;

    lcr(id('netherite_trisulfate_complex'))
        .itemInputs('gtceu:pure_netherite_dust')
        .inputFluids('gtceu:sulfuric_acid 3000', 'minecraft:water 2000')
        .outputFluids('gtceu:netherite_trisulfate_complex 1000', 'gtceu:hydrogen 8000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);
    
    lcr(id('netherite_hexammine_sulfate'))
        .inputFluids('gtceu:netherite_trisulfate_complex 1000', 'gtceu:ammonia 6000', 'gtceu:hydrogen 6000')
        .itemOutputs('gtceu:netherite_hexammine_sulfate_dust')
        .outputFluids('gtceu:sulfuric_acid 2000', 'minecraft:water 2000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);
    
    lcr(id('voidic_nitride'))
        .itemInputs('gtceu:netherite_hexammine_sulfate_dust')
        .inputFluids('gtceu:nitrobenzene 8000', 'gtceu:hydrogen 16000')
        .outputFluids('gtceu:voidic_nitride 1000', 'gtceu:ammonia 8000', 'gtceu:phenol 6000', 'gtceu:sulfuric_acid 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id('netherite_tetrahydroxide'))
        .itemInputs('gtceu:calcium_hydroxide_dust')
        .inputFluids('gtceu:netherite_trisulfate_complex 1000', 'gtceu:hydrogen 4000')
        .itemOutputs('gtceu:netherite_tetrahydroxide_dust', '3x gtceu:calcium_sulfate_dust')
        .outputFluids('minecraft:water 4000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id('astral_fluorosilicate'))
        .itemInputs('gtceu:netherite_tetrahydroxide_dust', '2x gtceu:silicon_dioxide_dust')
        .inputFluids('gtceu:hydrofluoric_acid 4000')
        .outputFluids('gtceu:astral_fluorosilicate 1000', 'minecraft:water 4000', 'gtceu:hydrogen_fluoride 3000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.mixer(id('primordial_nitrosilicate'))
        .inputFluids('gtceu:voidic_nitride 1000', 'gtceu:astral_fluorosilicate 1000')
        .outputFluids('gtceu:primordial_nitrosilicate 2000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    lcr(id('magnesium_nitride'))
        .itemInputs('3x gtceu:magnesium_dust')
        .inputFluids('gtceu:nitrogen 2000')
        .outputFluids('gtceu:magnesium_nitride 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    event.recipes.gtceu.chemical_plant(id('runic_convergence_infusion'))
        .inputFluids('gtceu:primordial_nitrosilicate 1000', 'gtceu:magnesium_nitride 1000')
        .outputFluids('gtceu:runic_convergence_infusion 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM]);

    /*
    ** Runic Plating Engraving
    ** ========================
    ** Runic Convergence Infusion Mechanic
    ** You can set amount of infusion to consume via circuit
    ** Higher consumption, lower chance of consuming the singularity, higher energy usage
    */

    [
        { singularity: 'nebular', plate: 'enriched_naquadah', plating: 'runic_engraved_plating', tier: 2, duration_multiplier: 1.6 },
        { singularity: 'zenith', plate: 'naquadah', plating: 'runic_pathway_engraved_plating', tier: 1, duration_multiplier: 1.3 },
        { singularity: 'hyperion', plate: 'naquadah_alloy', plating: 'runic_stabilization_plating', tier: 2.5, duration_multiplier: 2.1 },
        { singularity: 'spectral', plate: 'naquadria', plating: 'runic_energized_plating', tier: 3, duration_multiplier: 1.4 },
        { singularity: 'astral', plate: 'trinaquadalloy', plating: 'runic_transportation_engraved_plating', tier: 3, duration_multiplier: 1.8 },
    ].forEach(foo => {
        const { singularity, plate, plating, tier, duration_multiplier } = foo;

        for (let i = 1; i <= 4; i++) {
            // Each option adds 10 seconds
            let duration = 4000 * duration_multiplier + (i - 1) * 500;
            // Each option adds 20% more energy consumption
            let eut = GTValues.VHA[GTValues.LuV + Math.floor(tier)] + i * 0.5 * GTValues.VHA[GTValues.LuV + Math.floor(tier)];
            // Each option decreases the chance of consuming the singularity by 10%
            let chance = 10000 - (i - 1) * 2500;
            // Each option increases the infusion consumption by 1 mB

            event.recipes.gtceu.runic_circuitry_assembling_station(id(`${singularity}_${plating}_option_${i}`))
                .itemInputs(`gtceu:dense_${plate}_plate`)
                .chancedInput(`kubejs:singularity_${singularity}`, chance, 0)
                .perTick(true)
                .inputFluids(`gtceu:runic_convergence_infusion ${i}`)
                .perTick(false)
                .itemOutputs(`kubejs:${plating}`)
                .blastFurnaceTemp(10500 + (tier >= 2.5) ? 1000 : 0)
                .duration(duration)
                .EUt(eut)
                .circuit(i);
        }

        // event.recipes.gtceu.runic_circuitry_assembling_station(id(`${singularity}_${plating}`))
        //     .itemInputs(`gtceu:dense_${plate}_plate`, `kubejs:singularity_${singularity}`)
        //     .inputFluids(`gtceu:runic_convergence_infusion 200`)
        //     .itemOutputs(`kubejs:${plating}`)
        //     .blastFurnaceTemp(10500 + (tier >= 2.5) ? 1000 : 0)
        //     .duration(4000 * duration_multiplier)
        //     .EUt(GTValues.VHA[GTValues.LuV + Math.floor(tier)]);
    });

});