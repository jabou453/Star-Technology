LootJS.modifiers((event) => {
    
    const abydosTemple = [
        {loot: 'minecraft:gold_block', chance: .1},
        {loot: 'minecraft:enchanted_golden_apple', chance: .05},
        {loot: 'start_core:bacteria_dormant', chance: .15},
        {loot: 'kubejs:runic_tablet_1', chance: .05},
        {loot: 'kubejs:runic_tablet_2', chance: .05},
        {loot: 'kubejs:runic_tablet_3', chance: .05},
        {loot: 'kubejs:runic_tablet_4', chance: .05},
        {loot: 'kubejs:runic_tablet_5', chance: .05},
        {loot: 'kubejs:runic_tablet_6', chance: .05}
        ];
    abydosTemple.forEach(templeLoot => {
        event
        .addLootTableModifier('sgjourney:chests/desert_pyramid_loot_room')
        .randomChance(templeLoot.chance)
        .addLoot(templeLoot.loot);
    });

    const nether = [
        'minecraft:chests/bastion_bridge', 'minecraft:chests/bastion_hoglin_stable', 'minecraft:chests/bastion_other', 'minecraft:chests/bastion_treasure', 'minecraft:chests/nether_bridge'
    ].forEach(loottable => {
        event
            .addLootTableModifier(loottable)
            .randomChance(.05)
            .addLoot('kubejs:nether_talisman');
    });

    event
        .addLootTableModifier('minecraft:chests/end_city_treasure')
            .randomChance(.05)
            .addLoot('kubejs:end_talisman');
    
});