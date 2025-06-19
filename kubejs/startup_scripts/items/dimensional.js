ItemEvents.armorTierRegistry(event => {
    event.add('nether_armor', tier => {
        tier.durabilityMultiplier = 80 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [6, 10, 14, 6] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 12
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
        tier.repairIngredient = '#forge:ingots/neutronium'
        tier.toughness = 4.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 1.0
    });
});

StartupEvents.registry('item', event => {

    // Abydos
    event.create('abydos_talisman')
        .displayName('Pharoah\'s Necklace')
        .rarity('epic')
        .texture('kubejs:item/dimensional/nether_crown');

    // Nether
    event.create('nether_helmet', 'helmet')
        .tier('nether_armor')
        .displayName('Runic Infused Hazmat Helmet')
        .texture('kubejs:item/dimensional/nether_helmet')

    event.create('nether_chestplate', 'chestplate')
        .tier('nether_armor')
        .displayName('Runic Infused Hazmat Chestplate')
        .texture('kubejs:item/dimensional/nether_chestplate')

    event.create('nether_leggings', 'leggings')
        .tier('nether_armor')
        .displayName('Runic Infused Hazmat Leggings')
        .texture('kubejs:item/dimensional/nether_leggings')

    event.create('nether_boots', 'boots')
        .tier('nether_armor')
        .displayName('Runic Infused Hazmat Boots')
        .texture('kubejs:item/dimensional/nether_boots')

    event.create('nether_talisman')
        .displayName('Hell Crown')
        .rarity('epic')
        .texture('kubejs:item/dimensional/nether_crown');

    // End

});