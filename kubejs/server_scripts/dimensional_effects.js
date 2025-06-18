const dimensionEffect = (dimension, armorType, talismanList, effects) => {
    PlayerEvents.tick(event => {
        const { player } = event;
            
        const hasFullSet = checkArmor(player, armorType)

        const hasImmunity = checkImmunity(player, talismanList)
        
        if (hasFullSet) return
        if (hasImmunity) return
        
        if (player.level.dimension.toString() === `${dimension}`) {
            if (player.age % 200 === 0) {
                effects.forEach(effect => {
                    player.potionEffects.add(effect[0], effect[1], effect[2], effect[3], effect[4])
                });
            }
        }
    });
};

dimensionEffect('minecraft:the_nether', 'nether', ['gtceu:lead_block'], [['kubejs:radiation_poisoning', 300, 0, false, false], ['kubejs:toxic_atmosphere', 200, 0, false, false]]);

const checkArmor = (player, type) => {
    const helmet = player.headArmorItem.id;
    const chestplate = player.chestArmorItem.id;
    const leggings = player.legsArmorItem.id;
    const boots = player.feetArmorItem.id;
    
    if (helmet !== `kubejs:${type}_helmet` || chestplate !== `kubejs:${type}_chestplate` || leggings !== `kubejs:${type}_leggings` || boots !== `kubejs:${type}_boots`) return false
    return true
};

const checkImmunity = (player, list) => {
    list.forEach(target => {
        if (player.inventory.find(target) == -1) return false
    });
    return true
};

PlayerEvents.tick(event => {
    const { player } = event;

    // Radiation Poisoning
    if (player.hasEffect('kubejs:radiation_poisoning')) {
        
        let effects = ['minecraft:poison'];

        if (player.age % 40 === 0) {
            effects.forEach(effect => {
                player.potionEffects.add(effect, 60, 1, false, false)
            })
        }
        
        if (player.age % 100 === 0) {
            event.server.runCommandSilent(`execute as ${event.player.username} run damage ${event.player.username} 1 kubejs:radiation`);
        }
        
        if (player.age % 200 === 0) {
            player.tell(Text.of('§cYou feel sick from radiation...').red())
        }
    }
    
    // Toxic Atmosphere
    if (player.hasEffect('kubejs:toxic_atmosphere')) {
        let effects = ['minecraft:weakness', 'minecraft:nausea', 'minecraft:darkness'/*, ' minecraft:mining_fatigue'*/];

        if (player.age % 40 === 0) {
            effects.forEach(effect => {
                player.potionEffects.add(effect, 60, 1, false, false)
            })
        }
    }

});