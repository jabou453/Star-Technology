StartupEvents.registry('item', event => {
    // Define armor materials
    event.create('nether_armor_material')
        .tier('nether_tier')
        .durabilityMultiplier(15)
        .enchantmentValue(10)
        .equipSound('minecraft:item.armor.equip_iron')
        .repairIngredient('#forge:ingots/iron')
        .knockbackResistance(0.1)

    // Create armor pieces
    event.create('nether_helmet', 'helmet')
        .tier('nether_tier')
        .displayName('nether Helmet')
        .armorProtection(2)
        .texture('kubejs:item/nether_helmet')

    event.create('nether_chestplate', 'chestplate')
        .tier('nether_tier')
        .displayName('nether Chestplate')
        .armorProtection(6)
        .texture('kubejs:item/nether_chestplate')

    event.create('nether_leggings', 'leggings')
        .tier('nether_tier')
        .displayName('nether Leggings')
        .armorProtection(5)
        .texture('kubejs:item/nether_leggings')

    event.create('nether_boots', 'boots')
        .tier('nether_tier')
        .armorProtection(2)
        .texture('kubejs:item/nether_boots')
});

StartupEvents.registry('mob_effect', event => {
    // Create custom negative effects for the dimension
    event.create('radiation_poisoning')
        .displayName('Radiation Poisoning')
        .color(0x00FF00)
        .beneficial(false)
        .category('harmful')

    event.create('toxic_atmosphere')
        .displayName('Toxic Atmosphere')
        .color(0x8B4513)
        .beneficial(false)
        .category('harmful')
});