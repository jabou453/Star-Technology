
StartupEvents.registry('item', event => {

    [
        { name: 'nebular', intangibility: 1, paradoxicity: 5, causality: 9 },
        { name: 'zenith', intangibility: 2, paradoxicity: 8, causality: 5 },
        { name: 'hyperion', intangibility: 8, paradoxicity: 2, causality: 5 },
        { name: 'spectral', intangibility: 9, paradoxicity: 4, causality: 2 },
        { name: 'astral', intangibility: 5, paradoxicity: 9, causality: 1 },
    ].forEach(singularity => {
        event.create(`singularity_${singularity.name}`)
            .displayName(`${singularity.name.charAt(0).toUpperCase() + singularity.name.slice(1)} Singularity`)
            .texture(`kubejs:item/singularities/${singularity.name}`)
            .tooltip(`§3§lIntangibility:§r ${singularity.intangibility}`)
            .tooltip(`§5§lParadoxicity:§r ${singularity.paradoxicity}`)
            .tooltip(`§6§lCausality:§r ${singularity.causality}`)
            .rarity('epic');
    });

    // event.create('singularity_base')
    //     .displayName('Singularity Base')
    //     .texture('kubejs:item/singularities/base');


});