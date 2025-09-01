
StartupEvents.registry('item', event => {

    /*
    definitions:
    arc = auxiliary reaction
    mci = multi-cycle injector
    fls = fluid storage
    rfc = redstone flux coil
    rfs = redstone flux storage
    rft = redstone flux transfer
    */
    const colorcodes = {
        'ulv': '§8',
        'lv': '§7',
        'mv': '§b',
        'hv': '§6',
        'ev': '§5',
        'iv': '§9'
    }

    //all items => upgrade kits
    const upgrade_kit = (tier) => {

        event.create(`${tier}_upgraade_kit`)
            .displayName(`${colorcodes[tier]}${tier.toUpperCase()}§r Upgrade Kit`)
            .tooltip("§7Augment for Dynamos, RF Cells, Fluid Cells and other Thermal Series machines")
            .texture(`kubejs:item/kits/upgrade_kits/${tier}_kit`);

    };

    //dynamo's => auxiliary reaction kits
    const arc_kit = (tier) => {

        event.create(`${tier}_arc_kit`)
        .displayName(`${colorcodes[tier]}${tier.toUpperCase()}§r Auxiliary Reaction Chamber Kit`)
        .tooltip("§7Augment for Dynamos")
        .texture(`kubejs:item/kits/arc_kits/${tier}_arc_kit`);
    };

    //dynamo's => multi-cycle injectors kits
    const mci_kit = (tier) => {
    event.create(`${tier}_mci_kit`)
        .displayName(`${colorcodes[tier]}${tier.toUpperCase()}§r Multi-cycle Injectors Kit`)
        .tooltip('§7Augment for Dynamos')
        .texture(`kubejs:item/kits/mci_kits/${tier}_mci_kit`);
    };

    ['lv', 'mv', 'hv', 'ev'].forEach(tier => {

        upgrade_kit(tier);
        arc_kit(tier);
        mci_kit(tier);

    });

    //fluid cells => storage upgrade kits
    const fls_kit = (tier) => {

        event.create(`${tier}_fls_kit`)
            .displayName(`${colorcodes[tier]}${tier.toUpperCase()}§r Expanded Tank Kit`)
            .tooltip('§7Augment for Fluid Cell')
            .texture(`kubejs:item/kits/fls_kits/${tier}_fls_kit`);

    };

    //rf cells => general upgrade kits
    const rfc_kit = (tier) => {

        event.create(`${tier}_rfc_kit`)
            .displayName(`${colorcodes[tier]}${tier.toUpperCase()}§r Expanded RF Coil Kit`)
            .tooltip('§7Augment for Redstone Flux Cell')
            .texture(`kubejs:item/kits/rfc_kits/${tier}_rfc_kit`);

    };

    //rf cells => storage upgrade kits
    const rfs_kit = (tier) => {

        event.create(`${tier}_rfs_kit`)
            .displayName(`${colorcodes[tier]}${tier.toUpperCase()}§r Stabilized RF Coil Kit`)
            .tooltip('§7Augment for Redstone Flux Cell')
            .texture(`kubejs:item/kits/rfs_kits/${tier}_rfs_kit`);

    };

    //rf cells => transfer upgrade kits
    const rft_kit = (tier) => {

        event.create(`${tier}_rft_kit`)
            .displayName(`${colorcodes[tier]}${tier.toUpperCase()}§r High-Flux RF Coil Kit`)
            .tooltip('§7Augment for Redstone Flux Cell')
            .texture(`kubejs:item/kits/rft_kits/${tier}_rft_kit`);

    };

    ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv'].forEach(tier => {

        fls_kit(tier);
        rfc_kit(tier);
        rfs_kit(tier);
        rft_kit(tier);
        
    });

});