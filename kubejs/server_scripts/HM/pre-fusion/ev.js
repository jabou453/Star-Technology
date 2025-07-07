// packmode: hard

ServerEvents.recipes(event => {
    const id = global.id;



    // Fisson Controller
    event.recipes.gtceu.advanced_machine_facility(id(`nuclear_reactor`)) //test
        .itemInputs('gtceu:ev_assembler')
        .inputFluids('gtceu:soldering_alloy 864', 'gtceu:polyethylene 576', 'gtceu:rubber 432')
        .itemOutputs(`gtceu:nuclear_reactor`)
        .duration(1200)
        .scannerResearch(`gtceu:ev_fluid_heater`)
        .EUt(1920);
    event.recipes.gtceu.scanner(id('1_x_gtceu_ev_fluid_heater'))
        .itemInputs('gtceu:data_stick')
        .itemInputs(`gtceu:ev_fluid_heater`)
        .itemOutputs(Item.of(`gtceu:data_stick`, `{assembly_line_research:{research_id:"1x_gtceu_ev_fluid_heater",research_type:"gtceu:advanced_machine_facility"}}`))
        .duration(2400)
        .EUt(480);

});