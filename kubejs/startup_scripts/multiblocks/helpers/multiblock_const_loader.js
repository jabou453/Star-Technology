// priority: 1000000

//Core Mod Loader

    //Absolute Parallel Hatch Loader
    const $StarTRecipeModifiers = Java.loadClass('com.startechnology.start_core.recipe.StarTRecipeModifiers')
        //.recipeModifier($StarTRecipeModifiers.ABSOLUTE_PARALLEL)
            // gives multiblock ability to Absolute Parallel, works in .recipeModifiers([arg1, arg2, ..]) as well

    const $StarTPartAbility = Java.loadClass('com.startechnology.start_core.machine.StarTPartAbility')
        //Predicates.abilities($StarTPartAbility.ABSOLUTE_PARALLEL_HATCH)
            // designates Absolute Parallel Hatches as a viable block

//GTCEU Loader

    //Multiblock Relative Direction Loader
    const $RelativeDirection = Java.loadClass('com.gregtechceu.gtceu.api.pattern.util.RelativeDirection');
    //.pattern(definition => FactoryBlockPattern.start($RelativeDirection.BACK, $RelativeDirection.UP, $RelativeDirection.RIGHT)
        // redefines load order on multiblock (good for things like distillation tower and assembly line variants)
        // .start() defaults to LEFT, UP, FRONT
        // UP, DOWN, LEFT, RIGHT, FRONT, BACK are the 6 valid directions

    //Steam Parallels Loader
    const $SteamMulti = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine');
        //.machine((holder) => new $SteamMulti(holder, 8))
            // sets multiblock to use steam
        //.recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
            // allows multiblock to do steam parallels

    //Assembly Line Recipe Type Loader
    const $AssemblyLineMulti = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.electric.AssemblyLineMachine')
        //.machine((holder) => new $AssemblyLineMulti(holder))  
            // sets multiblock to use Assembly Line Recipe Logic
        //Predicates.abilities(PartAbility.EXPORT_ITEMS).addTooltips(Component.translatable("gtceu.multiblock.pattern.location_end")
            // this give preview output distinction that output is on end (purely cosmetic)

    //Heat Coiled Machine Loader
    const $CoiledMulti = Java.loadClass('com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine')
        //.machine((holder) => new $CoiledMulti(holder))  
            // sets multiblock to use Heat Coiled Machine Recipe Logic

