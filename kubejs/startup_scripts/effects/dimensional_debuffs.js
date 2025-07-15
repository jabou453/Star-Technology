StartupEvents.registry('mob_effect', event => {
    // Abydos
    event.create('sand_erosion')
        .displayName('Sand Erosion')
        .color(0x00FF00)
        .category('harmful')

    // Nether
    event.create('radiation_poisoning')
        .displayName('Radiation Poisoning')
        .color(0x00FF00)
        .category('harmful')

    event.create('toxic_atmosphere')
        .displayName('Toxic Atmosphere')
        .color(0x8B4513)
        .category('harmful')

    // End
    event.create('abyssal_drain')
        .displayName('Abyssal Drain')
        .color(0x8B4513)
        .category('harmful')
});