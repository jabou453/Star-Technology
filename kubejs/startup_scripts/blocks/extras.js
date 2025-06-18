
StartupEvents.registry('block', event => {

    // reference casings
    event.create('laser_casing')
        .displayName('Schrubblaser Beam Concentrator & Emmiter Capable Stellarium Casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/laser_casing');

    event.create('inscribe_casing')
        .displayName('Keelagraver Manipulator & Acuancentrator Capable Runicalium Casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/inscribe_casing');
    
    event.create('core_casing')
        .displayName('Ultra Purpur Powered Core & Draconic Designation Ready Infusion Casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/core_casing');

    // Extras
    event.create('meshblock')
        .displayName('Treated Wood Reinforced Mesh')
        .hardness(2)
        .resistance(2)
        .material('wood')
        .transparent(true)
        .defaultTranslucent() 
        .requiresTool(false)
        .tagBlock('mineable/axe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/multiblock/meshblock');

    // Draco Tier
    event.create('draco_ware_casing')
        .displayName('§5Draconicware§r Casing')
        .hardness(5)
        .resistance(10)
        .lightLevel(3)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/draco_ware_casing');

    event.create('draco_assembly_grating')
        .displayName('§5Draconic§r-Assembly Grating')
        .hardness(5)
        .resistance(10)
        .lightLevel(1)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/casings/draco_assembly_grating');

    event.create('draco_resilient_fusion_glass')
        .displayName('§5Draco-Breath§r Resilient Fusion Glass')
        .hardness(2)
        .resistance(2)
        .material('glass')
        .transparent(true)
        .defaultTranslucent() 
        .requiresTool(false)
        .textureAll('kubejs:block/multiblock/draco_resilient_fusion_glass');

    event.create('heart_of_the_flame')
        .displayName('§6Heart of the Flame')
        .hardness(5)
        .resistance(10)
        .lightLevel(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/multiblock/heart_of_the_flame');

    event.create('husk_of_the_flame')
        .displayName('§7Husk of the Flame')
        .hardness(5)
        .resistance(10)
        .lightLevel(2)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/husk_of_the_flame');

    event.create('husk_brick')
        .displayName('§7Husk Brick')
        .hardness(5)
        .resistance(10)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('kubejs:block/husk_brick');

    event.create('cryostone')
        .displayName('Cryostone')
        .hardness(2)
        .resistance(2)
        .material('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/cryostone');

    event.create('brimstone')
        .displayName('Brimstone')
        .hardness(2)
        .resistance(2)
        .material('stone')
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/brimstone');

});