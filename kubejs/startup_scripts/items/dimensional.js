ItemEvents.armorTierRegistry(event => {
    event.add('nether', tier => {
        tier.durabilityMultiplier = 80 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [6, 10, 14, 6] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 12
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
        tier.repairIngredient = '#forge:ingots/neutronium'
        tier.toughness = 4.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 1.0
    });
    
    event.add('end', tier => {
        tier.durabilityMultiplier = 80
        tier.slotProtections = [6, 10, 14, 6]
        tier.enchantmentValue = 12
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
        tier.repairIngredient = '#forge:ingots/neutronium'
        tier.toughness = 4.0
        tier.knockbackResistance = 1.0
    });
});

StartupEvents.registry('item', event => {

    // Abydos
    event.create('abydos_talisman')
        .displayName('Pharaoh\'s Necklace')
        .tooltip('§eAn ancient necklace, that once belonged to the great Pharaoh\'s.')
        .rarity('epic')
        .texture('kubejs:item/dimensional/abydos_talisman');

    // Nether
    event.create('nether_helmet', 'helmet')
        .tier('nether')
        .displayName('Runic Infused Hazmat Helmet')
        .texture('kubejs:item/dimensional/nether_helmet')

    event.create('nether_chestplate', 'chestplate')
        .tier('nether')
        .displayName('Runic Infused Hazmat Chestplate')
        .texture('kubejs:item/dimensional/nether_chestplate')

    event.create('nether_leggings', 'leggings')
        .tier('nether')
        .displayName('Runic Infused Hazmat Leggings')
        .texture('kubejs:item/dimensional/nether_leggings')

    event.create('nether_boots', 'boots')
        .tier('nether')
        .displayName('Runic Infused Hazmat Boots')
        .texture('kubejs:item/dimensional/nether_boots')

    event.create('nether_talisman')
        .displayName('Hell Crown')
        .tooltip('§4The crown of the long dead Nether King, lost to time.')
        .rarity('epic')
        .texture('kubejs:item/dimensional/nether_talisman');

    // End
    event.create('end_helmet', 'helmet')
        .tier('end')
        .displayName('Hellforged Helmet')
        .texture('kubejs:item/dimensional/end_helmet')

    event.create('end_chestplate', 'chestplate')
        .tier('end')
        .displayName('Hellforged Chestplate')
        .texture('kubejs:item/dimensional/end_chestplate')

    event.create('end_leggings', 'leggings')
        .tier('end')
        .displayName('Hellforged Leggings')
        .texture('kubejs:item/dimensional/end_leggings')

    event.create('end_boots', 'boots')
        .tier('end')
        .displayName('Hellforged Boots')
        .texture('kubejs:item/dimensional/end_boots')

    event.create('end_talisman')
        .displayName('Elder Dragon Wings')
        .tooltip('§5The remnants of the once great wings of an Elder Dragon')
        .rarity('epic')
        .texture('kubejs:item/dimensional/end_talisman');

});