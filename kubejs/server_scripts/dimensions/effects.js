PlayerEvents.tick(event => {
    const { player } = event;

    // Sand Erosion
    if (player.hasEffect('kubejs:sand_erosion')) {
        
        let effects = ['minecraft:slowness'];

        if (player.age % 40 === 0) {
            effects.forEach(effect => {
                player.potionEffects.add(effect, 60, 1, false, false)
            })
        }

        if (player.age % 100 === 0) {
            player.potionEffects.add('minecraft:hunger', 5, 0, false, false)
        }

        if (global.packmode !== 'abydos'){
            (() => {        
                if (player.age % 200 === 0) {
                    player.tell(Text.of('§eThe sands of Abydos are eroding you...').red())
                }
            })()
        }

    }

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