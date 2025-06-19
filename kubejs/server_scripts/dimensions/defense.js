const dimensionEffect = (dimension, armorType, talismanList, effectList) => {
    PlayerEvents.tick(event => {
        const { player } = event;
            
        const hasFullSet = checkArmor(player, armorType)

        const hasImmunity = checkImmunity(player, talismanList)
        
        if (hasFullSet) return
        if (hasImmunity) return
        
        if (player.level.dimension.toString() === `${dimension}`) {
            if (player.age % 200 === 0) {
                effectList.forEach(effect => {
                    player.potionEffects.add(effect[0], 300, 0, false, false)
                });
            }
        }
    });
};

dimensionEffect('sgjourney:abydos', 'gtceu:quarktech', ['kubejs:abydos_talisman'], ['kubejs:sand_erosion']);
dimensionEffect('minecraft:the_nether', 'kubejs:nether', ['kubejs:nether_talisman'], ['kubejs:radiation_poisoning', 'kubejs:toxic_atmosphere']);

const checkArmor = (player, type) => {
    const helmet = player.headArmorItem.id;
    const chestplate = player.chestArmorItem.id;
    const leggings = player.legsArmorItem.id;
    const boots = player.feetArmorItem.id;
    
    if (helmet !== `${type}_helmet` || chestplate !== `${type}_chestplate` || leggings !== `${type}_leggings` || boots !== `${type}_boots`) return false
    return true
};

const checkImmunity = (player, list) => {
    let key = false
    list.forEach(target => {
        if (player.inventory.find(target) == -1) return false
        else key = true
    });
    return key
};