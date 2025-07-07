// packmode: hard

ServerEvents.recipes(event => {
    const id = global.id;

    event.remove({ id: 'gtceu:centrifuge/lava_separation' });
    event.recipes.gtceu.centrifuge(id('lava_separation'))
        .inputFluids('minecraft:lava 500')
        .chancedOutput('gtceu:silicon_dioxide_dust',1750,100)
        .chancedOutput('gtceu:quicklime_dust',1500,75)
        .chancedOutput('gtceu:magnesia_dust',1350,60)
        .chancedOutput('gtceu:stone_dust',1200,50)
        .chancedOutput('gtceu:pyrolusite_dust',800,35)
        .chancedOutput('minecraft:gold_nugget',350,25)
        .outputFluids('gtceu:molten_waste 20')
        .duration(400)
        .EUt(30);

    event.remove({ id: 'gtceu:centrifuge/ash_separation' });
    event.recipes.gtceu.centrifuge(id('ash_separation'))
        .itemInputs('gtceu:ash_dust')
        .chancedOutput('gtceu:quickline_dust',4500,0)
        .chancedOutput('gtceu:potash_dust',1800,0)
        .chancedOutput('gtceu:phosphorus_pentoxide_dust',850,0)
        .chancedOutput('gtceu:magnesia_dust',700,0)
        .chancedOutput('gtceu:hematite_dust',450,0)
        .chancedOutput('gtceu:silicon_dioxide_dust',200,0)
        .duration(240)
        .EUt(30);

    event.remove({ type: 'gtceu:electric_blast_furnace' , output: 'gtceu:aluminium_nugget' });
    
});