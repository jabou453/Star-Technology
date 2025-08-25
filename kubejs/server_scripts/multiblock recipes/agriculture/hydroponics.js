ServerEvents.recipes(event => {
    const id = global.id;

    global.farmCropList.forEach(crop => {
        event.recipes.gtceu.hydroponic_garden(id(`${crop.name.split(':')[1]}${(!crop.name.startsWith('minecraft')) ? '_' + crop.name.split(':')[0] : ''}_harvest_npk`))
            .notConsumable(`8x ${(crop.seed) ? crop.seed : crop.name}`)
            .inputFluids('gtceu:npk_solution 500')
            .itemOutputs(`64x ${crop.name}`)
            .chancedOutput(`32x ${(crop.seed) ? crop.seed : crop.name}`, 5000, 0)
            .duration(600)
            .EUt(global.vha['lv'])
            .circuit(0);

    });

});