// Apply negative effects in specific dimensions
PlayerEvents.tick(event => {
    const { player } = event
    
    // Check if player is in the target dimension (replace 'minecraft:the_nether' with your dimension)
    if (player.level.dimension.toString() === 'minecraft:the_nether') {
        
        // Check if player has full hazmat armor set
        const hasFullHazmatSet = checkHazmatArmor(player)
        
        // Apply effects only if not wearing protective armor
        if (!hasFullHazmatSet) {
            // Apply radiation poisoning every 10 seconds
            if (player.age % 200 === 0) {
                player.potionEffects.add('kubejs:radiation_poisoning', 300, 1, false, false)
                player.potionEffects.add('kubejs:toxic_atmosphere', 200, 0, false, false)
                
                // Additional vanilla effects for realism
                player.potionEffects.add('minecraft:poison', 100, 0, false, false)
                player.potionEffects.add('minecraft:nausea', 160, 0, false, false)
            }
            
            // Optional: Damage over time
            if (player.age % 100 === 0) {
                player.attack('kubejs:radiation', 1)
            }
        }
    }
});

// Function to check if player has full hazmat armor
function checkHazmatArmor(player) {
    const helmet = player.headArmorItem
    const chestplate = player.chestArmorItem
    const leggings = player.legsArmorItem
    const boots = player.feetArmorItem
    
    return helmet.id === 'kubejs:hazmat_helmet' &&
           chestplate.id === 'kubejs:hazmat_chestplate' &&
           leggings.id === 'kubejs:hazmat_leggings' &&
           boots.id === 'kubejs:hazmat_boots'
}

// Optional: Remove effects when leaving the dimension
PlayerEvents.changedDimension(event => {
    const { player } = event
    
    // Remove custom effects when leaving the dangerous dimension
    if (event.from.toString() === 'minecraft:the_nether') {
        player.potionEffects.clear('kubejs:radiation_poisoning')
        player.potionEffects.clear('kubejs:toxic_atmosphere')
    }
});

// Define what the custom effects do
PlayerEvents.tick(event => {
    const { player } = event
    
    // Radiation Poisoning effects
    if (player.hasEffect('kubejs:radiation_poisoning')) {
        const amplifier = player.getEffect('kubejs:radiation_poisoning').amplifier
        
        // Reduce max health temporarily
        if (player.age % 40 === 0) {
            player.potionEffects.add('minecraft:weakness', 60, amplifier, false, false)
        }
        
        // Screen effects (optional)
        if (player.age % 20 === 0) {
            player.tell(Text.of('§cYou feel sick from radiation...').red())
        }
    }
    
    // Toxic Atmosphere effects
    if (player.hasEffect('kubejs:toxic_atmosphere')) {
        // Reduced visibility
        if (player.age % 60 === 0) {
            player.potionEffects.add('minecraft:darkness', 80, 0, false, false)
        }
    }
});