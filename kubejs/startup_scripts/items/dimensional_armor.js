ItemEvents.armorTierRegistry(event => {
    event.add('nether_armor', tier => {
        tier.durabilityMultiplier = 80 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [6, 10, 14, 6] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 12
        tier.equipSound = 'minecraft:item.armor.equip_iron'
        tier.repairIngredient = '#forge:ingots/neutronium'
        tier.toughness = 4.0 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 1.0
    });
});

StartupEvents.registry('item', event => {
    // Create armor pieces
    event.create('nether_helmet', 'helmet')
        .tier('nether_armor')
        .displayName('Radiation Resistant Helmet')
        .texture('kubejs:item/nether_helmet')

    event.create('nether_chestplate', 'chestplate')
        .tier('nether_armor')
        .displayName('Radiation Resistant Chestplate')
        .texture('kubejs:item/nether_chestplate')

    event.create('nether_leggings', 'leggings')
        .tier('nether_armor')
        .displayName('Radiation Resistant Leggings')
        .texture('kubejs:item/nether_leggings')

    event.create('nether_boots', 'boots')
        .tier('nether_armor')
        .displayName('Radiation Resistant Boots')
        .texture('kubejs:item/nether_boots')
});

StartupEvents.registry('mob_effect', event => {
    // Create custom negative effects for the dimension
    event.create('radiation_poisoning')
        .displayName('Radiation Poisoning')
        .color(0x00FF00)
        .category('harmful')

    event.create('toxic_atmosphere')
        .displayName('Toxic Atmosphere')
        .color(0x8B4513)
        .category('harmful')

    event.create('abyssal_drain')
        .displayName('Abyssal Drain')
        .color(0x8B4513)
        .category('harmful')
});