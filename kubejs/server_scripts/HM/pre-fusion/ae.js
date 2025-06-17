// packmode: hard

ServerEvents.recipes(event => {
    const id = global.id;

    // Clearing non Certus Outputs
    [
        'centrifuge/centrifuge_quartzite_dirty_dust_to_dust', 'centrifuge/quartz_sand_separation', 
        'macerator/macerate_quartzite_crushed_ore_to_impure_dust', 'ore_washer/wash_quartzite_crushed_ore_to_purified_ore',
        'ore_washer/wash_quartzite_crushed_ore_to_purified_ore_distilled'
    ].forEach( remove => {
    event.replaceOutput({id: `gtceu:${remove}`},`gtceu:certus_quartz_dust`,`gtceu:nether_quartz_dust`);
    });;


});