ServerEvents.recipes(event => {
    const id = global.id;
    
    //Controller Blocks 
        event.recipes.gtceu.assembly_line(id('component_part_assembly'))
        .itemInputs('gtceu:uv_assembler','8x gtceu:uv_robot_arm','8x gtceu:uv_conveyor_module',
            '8x gtceu:uv_electric_pump', '4x #gtceu:circuits/uhv', '6x #gtceu:circuits/uv', '8x #gtceu:circuits/zpm')
        .inputFluids('gtceu:soldering_alloy 12528', 'gtceu:lubricant 750')
        .itemOutputs('gtceu:component_part_assembly')
        .duration(1800)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:uv_assembler'))
                .EUt(GTValues.VHA[GTValues.UV])
                .CWUt(96)
            )
        .EUt(GTValues.VHA[GTValues.UV]);

    //Draco-QMDs
    const DracoQMD = (nameType,type,quantity,inputs,polymerAmount) => {
    event.recipes.gtceu.component_part_assembly(id(`draconic_qmd_${nameType}`))
        .itemInputs(inputs[0], inputs[1], inputs[2])
        .inputFluids(`gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate ${polymerAmount}`)
        .itemOutputs(`${quantity}x kubejs:draconic_qmd_${type}`)
        .duration(240 * quantity / 16)
        .EUt(GTValues.VHA[GTValues.UHV]);
    }

    DracoQMD('inductor', 'inductor', 16, ['1x gtceu:neutronium_ring', '4x gtceu:fine_naquadria_wire', '1x gtceu:ferrosilite_dust'], 144);
    DracoQMD('transistor', 'transistor', 16, ['1x gtceu:pure_netherite_foil', '8x gtceu:fine_tritanium_wire', '1x gtceu:aurourium_foil'], 144);
    DracoQMD('capacitor', 'capacitor', 16, ['2x gtceu:poly_34_ethylenedioxythiophene_polystyrene_sulfate_foil', '2x gtceu:zalloy_foil', '1x gtceu:cerium_tritelluride_foil'], 108);
    DracoQMD('resistor', 'resistor', 16, ['1x gtceu:diamane_dust', '6x gtceu:fine_yttrium_barium_cuprate_wire', '4x gtceu:bismuth_iridate_foil'], 144);
    DracoQMD('diode_nt', 'diode', 24, ['2x gtceu:silicon_carbide_over_bismuth_tritelluride_dust', '1x gtceu:neutronium_chip', '8x gtceu:fine_stellarium_wire'], 288);
    DracoQMD('diode_dr', 'diode', 32, ['2x gtceu:silicon_carbide_over_bismuth_tritelluride_dust', '1x gtceu:draco_chip', '8x gtceu:fine_stellarium_wire'], 288);


    const ComponentComposition = [
        {Tier: 'uhv', PrimaryMaterial: 'zalloy', SupportMaterial: 'zircalloy_4', TierMaterial: 'neutronium', Tier1Under: 'uv', Tier2Under: 'zpm', RubberR: 'styrene_butadiene_rubber',RubberF: 'perfluoroelastomer_rubber', Plastic: 'polyether_ether_ketone', WireTypeComputational: 'iron_selenide_over_strontium_titanium_oxide', WireTypeMechanical: 'zirconium', CableType: 'zirconium_selenide_diiodide', GlassType: 'fusion_glass', CatalystType: 'gravi_star', PrimaryMagnet: 'pure_netherite', SecondaryMagnet: 'samarium', Fluid: 'naquadria', VoltageCoil: 'thorium_plut_duranide_241', EUt: GTValues.VHA[GTValues.UHV], Scaler: 1, Coolant: 'liquid_helium', SuperConductor: 'ruthenium_trinium_americium_neutronate'},
        {Tier: 'uev', PrimaryMaterial: 'starium_alloy', SupportMaterial: 'magmada_alloy', TierMaterial: 'mythrolic_alloy', Tier1Under: 'uhv', Tier2Under: 'uv', RubberR: 'styrene_butadiene_rubber', RubberF: 'perfluoroelastomer_rubber', Plastic: 'polyether_ether_ketone', WireTypeComputational: 'astatine_bis_tritelluride_cobo_selenium_over_iron_titanium_oxide', WireTypeMechanical: 'hafnium', CableType: 'astatium_bioselex_carbonite', GlassType: 'fusion_glass', CatalystType: 'gravi_star', PrimaryMagnet: 'zapolgium', SecondaryMagnet: 'pure_netherite', Fluid: 'isovol', VoltageCoil: 'aurourium', EUt: GTValues.VHA[GTValues.UEV], Scaler: 2, Coolant: 'liquid_helium', SuperConductor: 'seaborgium_palladium_enriched_estalt_flerovium_alloy'},
   /*Change to GT Injection for all once UIV materials determined     {Tier: 'uiv', PrimaryMaterial: 'tbh', SupportMaterial: 'tbh', TierMaterial: 'tbh', Tier1Under: 'uev', Tier2Under: 'uhv', Rubber: 'perfluoroelastomer_rubber', Plastic: 'poly_34_ethylenedioxythiophene_polystyrene_sulfate', WireTypeComputational: 'tbd', WireTypeMechanical: 'tbd', GlassType: 'fusion_glass', CatalystType: 'gravi_star', PrimaryMagnet: 'pure_netherite', SecondaryMagnet: 'samarium', Fluid: 'naquadria', VoltageCoil: 'thorium_plut_duranide_241', EUt: GTValues.VHA[GTValues.UHV], Scaler: 1},
        {Tier: 'uxv', PrimaryMaterial: 'zalloy', SupportMaterial: 'zircalloy_4', TierMaterial: 'neutronium', Tier1Under: 'uv', Tier2Under: 'zpm', Rubber: 'stytene_butadiene_rubber', Plastic: 'polyether_ether_ketone', WireTypeComputational: 'iron_selenide_over_strontium_titanium_oxide', WireTypeMechanical: 'zirconium', GlassType: 'fusion_glass', CatalystType: 'gravi_star', PrimaryMagnet: 'pure_netherite', SecondaryMagnet: 'samarium', Fluid: 'naquadria', VoltageCoil: 'thorium_plut_duranide_241', EUt: GTValues.VHA[GTValues.UHV], Scaler: 1},
        {Tier: 'opv', PrimaryMaterial: 'zalloy', SupportMaterial: 'zircalloy_4', TierMaterial: 'neutronium', Tier1Under: 'uv', Tier2Under: 'zpm', Rubber: 'stytene_butadiene_rubber', Plastic: 'polyether_ether_ketone', WireTypeComputational: 'iron_selenide_over_strontium_titanium_oxide', WireTypeMechanical: 'zirconium', GlassType: 'fusion_glass', CatalystType: 'gravi_star', PrimaryMagnet: 'pure_netherite', SecondaryMagnet: 'samarium',  Fluid: 'naquadria', VoltageCoil: 'thorium_plut_duranide_241', EUt: GTValues.VHA[GTValues.UHV], Scaler: 1}
    */]

    ComponentComposition.forEach(comp => {
        //Component Parts
    event.recipes.gtceu.component_part_assembly(id(`${comp.Tier}_voltage_coil`))
        .itemInputs(`gtceu:${comp.TierMaterial}_tiny_fluid_pipe`,`gtceu:long_magnetic_${comp.PrimaryMagnet}_rod`, `32x gtceu:fine_${comp.VoltageCoil}_wire`)
        .inputFluids(`gtceu:${comp.Coolant} 1000`)
        .itemOutputs(`kubejs:${comp.Tier}_voltage_coil`)
        .duration(200)
        .EUt(comp.EUt);

    event.recipes.gtceu.component_part_assembly(id(`${comp.Tier}_computational_matrix`))
        .itemInputs(`gtceu:${comp.PrimaryMaterial}_frame`, `2x #gtceu:circuits/${comp.Tier}`, `4x #gtceu:circuits/${comp.Tier1Under}`, `6x #gtceu:circuits/${comp.Tier2Under}`,
            `32x gtceu:fine_${comp.WireTypeComputational}_wire`, `${2*(2**comp.Scaler)}x kubejs:qram_chip`)
        .inputFluids(`gtceu:sterilized_growth_medium ${250+comp.Scaler*250}`, `gtceu:indium_tin_lead_cadmium_soldering_alloy ${72+comp.Scaler*72}`)
        .itemOutputs(`kubejs:${comp.Tier}_computational_matrix`) 
        .duration(700)
        .EUt(comp.EUt);

    event.recipes.gtceu.component_part_assembly(id(`${comp.Tier}_transmission_assembly`))
        .itemInputs(`gtceu:${comp.PrimaryMaterial}_frame`, `gtceu:${comp.Tier1Under}_electric_motor`, `2x gtceu:${comp.PrimaryMaterial}_rod`, `2x gtceu:${comp.PrimaryMaterial}_ring`,
            `8x gtceu:${comp.PrimaryMaterial}_round`, `64x gtceu:fine_${comp.WireTypeMechanical}_wire`)
        .inputFluids(`gtceu:lubricant ${250+comp.Scaler*250}`)
        .itemOutputs(`kubejs:${comp.Tier}_transmission_assembly`) 
        .duration(400)
        .EUt(comp.EUt);

    event.recipes.gtceu.component_part_assembly(id(`${comp.Tier}_precision_drive_mechanism`))
        .itemInputs(`gtceu:${comp.PrimaryMaterial}_frame`, `gtceu:${comp.Tier1Under}_electric_motor`, `#gtceu:circuits/${comp.Tier1Under}`,
            `gtceu:${comp.SupportMaterial}_gear`, `gtceu:small_${comp.PrimaryMaterial}_gear`,`8x gtceu:${comp.PrimaryMaterial}_round`)
        .inputFluids(`gtceu:lubricant ${250+comp.Scaler*250}`, `gtceu:${comp.RubberF} 1728`)
        .itemOutputs(`kubejs:${comp.Tier}_precision_drive_mechanism`) 
        .duration(600)
        .EUt(comp.EUt);

    event.recipes.gtceu.component_part_assembly(id(`${comp.Tier}_microfluidic_flow_valve`))
        .itemInputs(`gtceu:${comp.Tier1Under}_fluid_regulator`, `gtceu:${comp.TierMaterial}_small_fluid_pipe`, `2x gtceu:${comp.PrimaryMaterial}_plate`, `6x gtceu:${comp.PrimaryMaterial}_round`,
            `4x gtceu:${comp.RubberR}_ring`, `6x gtceu:${comp.PrimaryMaterial}_ring`)
        .inputFluids(`gtceu:${comp.Plastic} ${396+comp.Scaler*36}`)
        .itemOutputs(`kubejs:${comp.Tier}_microfluidic_flow_valve`) 
        .duration(400)
        .EUt(comp.EUt);

    event.recipes.gtceu.component_part_assembly(id(`${comp.Tier}_super_magnetic_core`))
        .itemInputs(`gtceu:long_magnetic_${comp.PrimaryMagnet}_rod`,  `2x gtceu:magnetic_${comp.SecondaryMagnet}_rod`,
        `3x gtceu:${comp.PrimaryMaterial}_rod`, `24x gtceu:fine_${comp.WireTypeMechanical}_wire`, `2x gtceu:${comp.TierMaterial}_tiny_fluid_pipe`)
        .inputFluids(`gtceu:${comp.Coolant} 2500`)
        .itemOutputs(`kubejs:${comp.Tier}_super_magnetic_core`) 
        .duration(500)
        .EUt(comp.EUt);

    event.recipes.gtceu.component_part_assembly(id(`${comp.Tier}_catalyst_core`))
        .itemInputs(`4x gtceu:long_${comp.PrimaryMaterial}_rod`, `gtceu:${comp.GlassType}`,`gtceu:${comp.CatalystType}`, `32x gtceu:fine_${comp.SuperConductor}_wire`, `gtceu:${comp.Tier1Under}_emitter`, `4x gtceu:${comp.SupportMaterial}_ring`)
        .inputFluids(`gtceu:${comp.Fluid} 576`)
        .itemOutputs(`kubejs:${comp.Tier}_catalyst_core`) 
        .duration(800)
        .EUt(comp.EUt);

    event.recipes.gtceu.component_part_assembly(id(`${comp.Tier}_high_strength_panel`))
        .itemInputs(`2x gtceu:double_${comp.PrimaryMaterial}_plate`, `#gtceu:circuits/${comp.Tier}`, `8x gtceu:${comp.SupportMaterial}_screw`)
        .inputFluids(`gtceu:${comp.TierMaterial} 576`, `gtceu:${comp.Plastic} ${396+comp.Scaler*36}`)
        .itemOutputs(`kubejs:${comp.Tier}_high_strength_panel`) 
        .duration(300)
        .EUt(comp.EUt);

    event.recipes.gtceu.component_part_assembly(id(`${comp.Tier}_micropower_router`))
        .itemInputs(`gtceu:${comp.CableType}_double_cable`, `4x gtceu:${comp.CableType}_single_cable`, `4x gtceu:${comp.PrimaryMaterial}_plate`,
        `32x gtceu:fine_${comp.WireTypeComputational}_wire`)
        .inputFluids(`gtceu:${comp.RubberF} 720`)
        .itemOutputs(`kubejs:${comp.Tier}_micropower_router`) 
        .duration(400)
        .EUt(comp.EUt);

            //Components

        event.recipes.gtceu.assembly_line(id(`${comp.Tier}_electric_motor`))
            .itemInputs(`kubejs:${comp.Tier}_super_magnetic_core`, `2x gtceu:long_${comp.PrimaryMaterial}_rod`, `kubejs:${comp.Tier}_transmission_assembly`,`kubejs:${comp.Tier}_micropower_router`, `64x gtceu:fine_${comp.WireTypeMechanical}_wire`)
            .inputFluids(`gtceu:indium_tin_lead_cadmium_soldering_alloy ${288*(2**comp.Scaler)}`, `gtceu:lubricant ${500+comp.Scaler*500}`, `gtceu:${comp.Fluid} 576`)
            .itemOutputs(`gtceu:${comp.Tier}_electric_motor`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${comp.Tier1Under}_electric_motor`))
                    .EUt(comp.EUt/4)
                    .CWUt(64+64*comp.Scaler)
            )
            .duration(600)
            .EUt(comp.EUt/4);

        event.recipes.gtceu.assembly_line(id(`${comp.Tier}_electric_pump`))
            .itemInputs(`gtceu:${comp.Tier}_electric_motor`, `gtceu:${comp.TierMaterial}_large_fluid_pipe`, `kubejs:${comp.Tier}_microfluidic_flow_valve`,`kubejs:${comp.Tier}_micropower_router`, `16x gtceu:${comp.RubberR}_ring`, `gtceu:${comp.SupportMaterial}_rotor`)
            .inputFluids(`gtceu:indium_tin_lead_cadmium_soldering_alloy ${288*(2**comp.Scaler)}`, `gtceu:lubricant ${500+comp.Scaler*500}`, `gtceu:${comp.Fluid} 576`)
            .itemOutputs(`gtceu:${comp.Tier}_electric_pump`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${comp.Tier1Under}_electric_pump`))
                    .EUt(comp.EUt/4)
                    .CWUt(64+64*comp.Scaler)
            )
            .duration(600)
            .EUt(comp.EUt/4);

        event.recipes.gtceu.assembler(id(`${comp.Tier}_fluid_regulator`))
            .itemInputs(`gtceu:${comp.Tier}_electric_pump`, `2x #gtceu:circuits/${comp.Tier}`)
            .itemOutputs(`gtceu:${comp.Tier}_fluid_regulator`)
            .duration(50)
            .EUt(comp.EUt)
            .circuit(1);

        event.recipes.gtceu.assembly_line(id(`${comp.Tier}_conveyor_module`))
            .itemInputs(`2x gtceu:${comp.Tier}_electric_motor`, `kubejs:${comp.Tier}_high_strength_panel`, `kubejs:${comp.Tier}_precision_drive_mechanism`, `kubejs:${comp.Tier}_transmission_assembly`, `kubejs:${comp.Tier}_micropower_router`)
            .inputFluids(`gtceu:indium_tin_lead_cadmium_soldering_alloy ${288*(2**comp.Scaler)}`, `gtceu:lubricant ${500+comp.Scaler*500}`, `gtceu:${comp.RubberF} 3456`, `gtceu:${comp.Fluid} 576`)
            .itemOutputs(`gtceu:${comp.Tier}_conveyor_module`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${comp.Tier1Under}_conveyor_module`))
                    .EUt(comp.EUt/4)
                    .CWUt(64+64*comp.Scaler)
            )
            .duration(600)
            .EUt(comp.EUt/4);

        event.recipes.gtceu.assembly_line(id(`${comp.Tier}_electric_piston`))
            .itemInputs(`gtceu:${comp.Tier}_electric_motor`, `2x kubejs:${comp.Tier}_high_strength_panel`, `2x kubejs:${comp.Tier}_transmission_assembly`, `kubejs:${comp.Tier}_micropower_router`, `gtceu:${comp.SupportMaterial}_gear`, `gtceu:small_${comp.PrimaryMaterial}_gear`)
            .inputFluids(`gtceu:indium_tin_lead_cadmium_soldering_alloy ${288*(2**comp.Scaler)}`, `gtceu:lubricant ${500+comp.Scaler*500}`, `gtceu:${comp.Fluid} 576`)
            .itemOutputs(`gtceu:${comp.Tier}_electric_piston`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${comp.Tier1Under}_electric_piston`))
                    .EUt(comp.EUt/4)
                    .CWUt(64+64*comp.Scaler)
            )
            .duration(600)
            .EUt(comp.EUt/4);

        event.recipes.gtceu.assembly_line(id(`${comp.Tier}_robot_arm`))
            .itemInputs(`4x gtceu:long_${comp.PrimaryMaterial}_rod`, `kubejs:${comp.Tier}_precision_drive_mechanism`, `2x kubejs:${comp.Tier}_transmission_assembly`, `2x gtceu:${comp.Tier}_electric_motor`, `gtceu:${comp.Tier}_electric_piston`, `3x kubejs:${comp.Tier}_computational_matrix`, `2x kubejs:${comp.Tier}_micropower_router`)
            .inputFluids(`gtceu:indium_tin_lead_cadmium_soldering_alloy ${864*(2**comp.Scaler)}`, `gtceu:lubricant ${500+comp.Scaler*500}`, `gtceu:${comp.Fluid} 576`)
            .itemOutputs(`gtceu:${comp.Tier}_robot_arm`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${comp.Tier1Under}_robot_arm`))
                    .EUt(comp.EUt/4)
                    .CWUt(64+64*comp.Scaler)
            )
            .duration(600)
            .EUt(comp.EUt/4);

        event.recipes.gtceu.assembly_line(id(`${comp.Tier}_field_generator`))
            .itemInputs(`gtceu:${comp.PrimaryMaterial}_frame`, `2x kubejs:${comp.Tier}_high_strength_panel`, `kubejs:${comp.Tier}_catalyst_core`, `2x gtceu:${comp.Tier}_emitter`, `kubejs:${comp.Tier}_computational_matrix`, `64x gtceu:fine_${comp.SuperConductor}_wire`, `2x kubejs:${comp.Tier}_micropower_router`)
            .inputFluids(`gtceu:indium_tin_lead_cadmium_soldering_alloy ${864*(2**comp.Scaler)}`, `gtceu:${comp.Fluid} 576`)
            .itemOutputs(`gtceu:${comp.Tier}_field_generator`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${comp.Tier1Under}_field_generator`))
                    .EUt(comp.EUt/4)
                    .CWUt(64+64*comp.Scaler)
            )
            .duration(600)
            .EUt(comp.EUt/4);

        event.recipes.gtceu.assembly_line(id(`${comp.Tier}_emitter`))
            .itemInputs(`gtceu:${comp.PrimaryMaterial}_frame`, `gtceu:${comp.Tier}_electric_motor`, `4x gtceu:long_${comp.PrimaryMaterial}_rod`, `kubejs:${comp.Tier}_catalyst_core`, `kubejs:${comp.Tier}_computational_matrix`, `64x gtceu:${comp.TierMaterial}_foil`, `2x kubejs:${comp.Tier}_micropower_router`)
            .inputFluids(`gtceu:indium_tin_lead_cadmium_soldering_alloy ${576*(2**comp.Scaler)}`, `gtceu:${comp.Fluid} 576`)
            .itemOutputs(`gtceu:${comp.Tier}_emitter`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${comp.Tier1Under}_emitter`))
                    .EUt(comp.EUt/4)
                    .CWUt(64+64*comp.Scaler)
            )
            .duration(600)
            .EUt(comp.EUt/4);

        event.recipes.gtceu.assembly_line(id(`${comp.Tier}_sensor`))
            .itemInputs(`gtceu:${comp.PrimaryMaterial}_frame`, `gtceu:${comp.Tier}_electric_motor`, `4x gtceu:${comp.PrimaryMaterial}_plate`, `kubejs:${comp.Tier}_catalyst_core`, `kubejs:${comp.Tier}_computational_matrix`, `64x gtceu:${comp.TierMaterial}_foil`, `2x kubejs:${comp.Tier}_micropower_router`)
            .inputFluids(`gtceu:indium_tin_lead_cadmium_soldering_alloy ${576*(2**comp.Scaler)}`, `gtceu:${comp.Fluid} 576`)
            .itemOutputs(`gtceu:${comp.Tier}_sensor`)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                    .researchStack(Item.of(`gtceu:${comp.Tier1Under}_sensor`))
                    .EUt(comp.EUt/4)
                    .CWUt(64+64*comp.Scaler)
            )
            .duration(600)
            .EUt(comp.EUt/4);

    });
});

    