StartupEvents.registry('block', event => {
    event.create('noble_mixing_casing')
        .displayName('Noble Mixing Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/ultimate_multis/noble_mixing_casing');

    event.create('quake_proof_casing')
        .displayName('Quake Proof Casing')
        .hardness(5)
        .resistance(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/ultimate_multis/quake_proof_casing');

    event.create('extreme_temperature_smelting_casing')
        .displayName('Extreme Temperature Smelting Casing')
        .hardness(5)
        .resistance(10)
        .material('metal')
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .requiresTool(false)
        .textureAll('kubejs:block/casings/ultimate_multis/extreme_temperature_smelting_casing');
});