const dimensionEffect = (dimension, armorType, talismanList, effectList) => {
    PlayerEvents.tick(event => {
        const { player } = event;
        if (player.age % 200 === 0) {
            
            if (player.level.dimension.toString() !== `${dimension}`) return
                
            let hasFullSet = checkArmor(event, armorType);
            if (hasFullSet) return

            let hasCurio = checkCurios(event, talismanList);
            if (hasCurio) return

            let hasImmunity = checkImmunity(event, talismanList);
            if (hasImmunity) return

            if (dimension != 'sgjourney:abydos' && player.headArmorItem.id == 'gtceu:quarktech_helmet') {
                event.server.runCommandSilent(`clear ${player.username} gtceu:quarktech_helmet`);
                player.tell('Your QuarkTech armor suit could not resist the intense environment of this dimension and broke.');
            }

            effectList.forEach(effect => {
                player.potionEffects.add(effect, 300, 0, false, false);
            });
        }
        
    });
};

dimensionEffect('sgjourney:abydos', 'gtceu:quarktech', ['kubejs:abydos_talisman'], ['kubejs:sand_erosion']);
dimensionEffect('minecraft:the_nether', 'kubejs:nether', ['kubejs:nether_talisman'], ['kubejs:radiation_poisoning', 'kubejs:toxic_atmosphere']);
dimensionEffect('minecraft:the_end', 'kubejs:end', ['kubejs:end_talisman'], ['kubejs:abyssal_drain']);

global.checkArmor = (event, type) => {
    let armorCheck = false

    const helmet = event.player.headArmorItem.id;
    const chestplate = event.player.chestArmorItem.id;
    const leggings = event.player.legsArmorItem.id;
    const boots = event.player.feetArmorItem.id;
    
    if (helmet == `${type}_helmet` &&
        chestplate == `${type}_chestplate` &&
        leggings == `${type}_leggings` &&
        boots == `${type}_boots`) armorCheck = true

    if (type == 'gtceu:quarktech') {
        if (helmet == 'gtceu:quarktech_helmet' &&
            chestplate == 'gtceu:advanced_quarktech_chestplate' &&
            leggings == 'gtceu:quarktech_leggings' &&
            boots == 'gtceu:quarktech_boots') armorCheck = true}
    return armorCheck
};

global.checkImmunity = (event, list) => {
    let key = false;
    list.forEach(target => {
        if (event.player.inventory.find(target) == -1) return false
        else key = true;
    });
    return key
};

global.checkCurios = (event, curiosList) => { 
    let curios = event.player.nbt.ForgeCaps['curios:inventory']
    let key = false;
    curiosList.forEach(curio => {
        if (curios.toString().contains(curio)) {
            key = true;
        }
    })
    return key
}