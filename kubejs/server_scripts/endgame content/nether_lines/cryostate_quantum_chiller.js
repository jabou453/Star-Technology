ServerEvents.recipes(event => {
    const id = global.id;

    // Controller

    event.recipes.gtceu.assembly_line(id('cryostate_quantum_chiller'))
        .itemInputs(
            'gtceu:isovol_frame', '12x #gtceu:circuits/uev', '32x kubejs:uhv_high_strength_panel', '8x gtceu:neutronium_huge_fluid_pipe', '32x gtceu:uhv_field_generator',
            '24x gtceu:uhv_electric_pump', '4x gtceu:isovol_rotor', '32x gtceu:calamatium_screw'
        )
        .inputFluids(
            'gtceu:liquid_helium 1000000',
            'gtceu:utopian_akreyrium 60000'
        )
        .itemOutputs('gtceu:cryostate_quantum_chiller')
        .duration(1800)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:mega_vacuum_freezer'))
                .EUt(GTValues.VA[GTValues.UHV])
                .CWUt(192)
            )
        .EUt(GTValues.VA[GTValues.UEV]);

    //Quantum Cooling
    event.recipes.gtceu.quantum_cooling(id('bec_og'))
        .inputFluids('gtceu:oganesson 500')
        .inputFluids('gtceu:superstate_helium_3 7500')
        .outputFluids('gtceu:bec_og 500')
        .outputFluids('gtceu:helium_3 5000')
        .duration(320)
        .EUt(GTValues.VHA[GTValues.UV]);

    event.recipes.gtceu.quantum_cooling(id('superstate_helium_3'))
        .inputFluids('gtceu:helium_3 5000')
        .inputFluids('gtceu:liquid_helium 5000')
        .outputFluids('gtceu:superstate_helium_3 5000')
        .outputFluids('gtceu:helium 2500')
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM]);
    
    // Bulk Recipes
    event.forEachRecipe({type:'gtceu:vacuum_freezer'}, VacParse => {
        let BulkVac = JSON.parse(VacParse.json);
            let Duration = BulkVac.duration;
            let EUt = BulkVac.tickInputs.eu[0].content;
            let InItem = false;
            let InFluid1 = false;
            let InFluid2 = false;
            let OutFluid = false;
            let OutItem = false;
            if (BulkVac.inputs.item?.length == 1) {InItem = BulkVac.inputs.item[0].content;}
            if (BulkVac.inputs.fluid?.length >= 1) {InFluid1 = BulkVac.inputs.fluid[0].content;}
            if (BulkVac.inputs.fluid?.length == 2) {InFluid2 = BulkVac.inputs.fluid[1].content;}
            if (BulkVac.outputs.fluid?.length == 1) {OutFluid = BulkVac.outputs.fluid[0].content;}
            if (BulkVac.outputs.item?.length == 1) {OutItem = BulkVac.outputs.item[0].content;}

        let Greater15000 = [
            'mythrolic_alloy',
            'magmada_alloy',
            'starium_alloy',
            'seaborgium_palladium_enriched_estalt_flerovium_alloy',
            'xeproda',
            'rhexis',
            'chalyblux'
        ]; //Add to list as needed (must add to const at bottom as well)

    // Fluid => Cooled Fluid
    if (InItem == false) {
        let adjFluidIn = (InFluid1.value[0].tag == `forge:water`) ? Fluid.of(`minecraft:water`, InFluid1.amount * 256) : Fluid.of(`gtceu:${InFluid1.value[0].tag.slice(6)}`, InFluid1.amount * 256);  
    event.recipes.gtceu.bulk_vacuum_cooling(id(`${OutFluid.value[0].fluid.slice(6)}`))
        .inputFluids(adjFluidIn)
        .outputFluids(Fluid.of(OutFluid.value[0].fluid, OutFluid.amount * 256))
        .duration(Duration * 192)
        .EUt(EUt);
    }
    if (InItem !== false) {
            let OutputName = OutItem.ingredient.item.slice(6).replace("_ingot", "");
    if (!Greater15000.includes(OutputName)) { 
    // Cooling Hot Ingots
    if (InItem.ingredient.item !== 'gtceu:ingot_casting_mold') {
        // Cooled Without Fluid
        if (InFluid1 == false) {
    event.recipes.gtceu.bulk_vacuum_cooling(id(`cool_hot_${InItem.ingredient.tag.slice(17)}_ingot`))
        .itemInputs(`256x gtceu:hot_${InItem.ingredient.tag.slice(17)}_ingot`)
        .itemOutputs(`256x ${OutItem.ingredient.item}`)
        .duration(Duration * 192)
        .EUt(EUt);
        } 
        // Cooled With Fluid
        if (InFluid1 !== false) {
    event.recipes.gtceu.bulk_vacuum_cooling(id(`cool_hot_${InItem.ingredient.tag.slice(17)}_ingot`))
        .itemInputs(`256x gtceu:hot_${InItem.ingredient.tag.slice(17)}_ingot`)
        .inputFluids(Fluid.of(`gtceu:${InFluid1.value[0].tag.slice(6)}`, InFluid1.amount * 256))
        .itemOutputs(`256x ${OutItem.ingredient.item}`)
        .outputFluids(Fluid.of(OutFluid.value[0].fluid, OutFluid.amount * 256))
        .duration(Duration * 192)
        .EUt(EUt);   
        }
    }
    // Cooling Molten
    if (InItem.ingredient.item == 'gtceu:ingot_casting_mold') {
        // Cooled Without Fluid
        if (InFluid2 == false) {
    event.recipes.gtceu.bulk_vacuum_cooling(id(`${InFluid1.value[0].tag.slice(6)}`))
        .notConsumable('gtceu:ingot_casting_mold')
        .inputFluids(Fluid.of(`gtceu:${InFluid1.value[0].tag.slice(6)}`, InFluid1.amount * 256))
        .itemOutputs(`256x ${OutItem.ingredient.item}`)
        .duration(Duration * 192)
        .EUt(EUt);
        } 
        // Cooled With Fluid
        if (InFluid2 !== false) {
    event.recipes.gtceu.bulk_vacuum_cooling(id(`${InFluid1.value[0].tag.slice(6)}`))
        .notConsumable('gtceu:ingot_casting_mold')
        .inputFluids(Fluid.of(`gtceu:${InFluid1.value[0].tag.slice(6)}`, InFluid1.amount * 256))
        .inputFluids(Fluid.of(`gtceu:${InFluid2.value[0].tag.slice(6)}`, InFluid1.amount * 256))
        .itemOutputs(`256x ${OutItem.ingredient.item}`)
        .outputFluids(Fluid.of(OutFluid.value[0].fluid, OutFluid.amount * 256))
        .duration(Duration * 192)
        .EUt(EUt);
        }
    }
    }
    }
        
    }); 
        
    // >15000K Cooling
    const Material15000Plus = (type,eut,dur,hasMolten) => {    
        
        if (hasMolten == true) {
        event.remove({id: `gtceu:vacuum_freezer/${type}`});
        event.recipes.gtceu.vacuum_freezer(`${type}_from_molten`)
            .inputFluids(`gtceu:molten_${type} 144`)
            .inputFluids('gtceu:superstate_helium_3 500')
            .notConsumable('gtceu:ingot_casting_mold')
            .itemOutputs(`gtceu:${type}_ingot`)
            .outputFluids('gtceu:helium_3 250')
            .duration(dur * 20 * .32)
            .EUt(eut / 24);    
        event.recipes.gtceu.bulk_vacuum_cooling(`${type}_from_molten`)
            .inputFluids(`gtceu:molten_${type} 36864`)
            .inputFluids('gtceu:superstate_helium_3 128000')
            .notConsumable('gtceu:ingot_casting_mold')
            .itemOutputs(`256x gtceu:${type}_ingot`)
            .outputFluids('gtceu:helium_3 64000')
            .duration(dur * 20 * .32 * 192)
            .EUt(eut / 24);

        }
        
        event.remove({id: `gtceu:vacuum_freezer/cool_hot_${type}_ingot`});
        event.recipes.gtceu.vacuum_freezer(`${type}_from_hot_ingot`)
            .itemInputs(`gtceu:hot_${type}_ingot`)
            .inputFluids('gtceu:superstate_helium_3 500')
            .itemOutputs(`gtceu:${type}_ingot`)
            .outputFluids('gtceu:helium_3 250')
            .duration(dur * 20 * .32)
            .EUt(eut / 24);
        event.recipes.gtceu.bulk_vacuum_cooling(`${type}_from_hot_ingot`)
            .itemInputs(`256x gtceu:hot_${type}_ingot`)
            .inputFluids('gtceu:superstate_helium_3 128000')
            .itemOutputs(`256x gtceu:${type}_ingot`)
            .outputFluids('gtceu:helium_3 64000')
            .duration(dur * 20 * .32 * 192)
            .EUt(eut / 24);
        
    };
    Material15000Plus('mythrolic_alloy', GTValues.VHA[GTValues.UEV], 43.6, true);
    Material15000Plus('magmada_alloy', GTValues.VHA[GTValues.UEV], 52.4, true);
    Material15000Plus('starium_alloy', GTValues.VA[GTValues.UEV], 39.8, true);
    Material15000Plus('seaborgium_palladium_enriched_estalt_flerovium_alloy', GTValues.VHA[GTValues.UIV], 47.4, true);
    Material15000Plus('xeproda', GTValues.VA[GTValues.UEV], 162.5, false);
    Material15000Plus('rhexis', GTValues.VA[GTValues.UIV], 172.5, false);
    Material15000Plus('chalyblux', GTValues.VA[GTValues.UEV], 187.5, false);

});