const dimensionEffect = (dimension, armorType, talismanList, effectList) => {
    PlayerEvents.tick(event => {
        const { player } = event;
            
        const hasFullSet = checkArmor(player, armorType)
        if (hasFullSet) return

        const hasCurio = checkCurios(event, talismanList)
        if (hasCurio) return

        const hasImmunity = checkImmunity(player, talismanList)
        if (hasImmunity) return
        
        if (player.level.dimension.toString() !== `${dimension}`) return

        if (player.age % 200 === 0) {
            effectList.forEach(effect => {
                player.potionEffects.add(effect, 300, 0, false, false)
            });
        }
        
    });
};

dimensionEffect('sgjourney:abydos', 'gtceu:quarktech', ['kubejs:abydos_talisman'], ['kubejs:sand_erosion']);
dimensionEffect('minecraft:the_nether', 'kubejs:nether', ['kubejs:nether_talisman'], ['kubejs:radiation_poisoning', 'kubejs:toxic_atmosphere']);
dimensionEffect('minecraft:the_end', 'kubejs:end', ['kubejs:end_talisman'], ['kubejs:abyssal_drain']);

const checkArmor = (player, type) => {
    let armorCheck = false

    const helmet = player.headArmorItem.id;
    const chestplate = player.chestArmorItem.id;
    const leggings = player.legsArmorItem.id;
    const boots = player.feetArmorItem.id;
    
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

const checkImmunity = (player, list) => {
    let key = false
    list.forEach(target => {
        if (player.inventory.find(target) == -1) return false
        else key = true
    });
    return key
};

const checkCurios = (event, curiosList) => { 
    let curios = event.player.nbt.ForgeCaps['curios:inventory']
    let key = false
    curiosList.forEach(curio => {
        if (curios.toString().contains(curio)) {
            key = true
        }
    })
    return key
}