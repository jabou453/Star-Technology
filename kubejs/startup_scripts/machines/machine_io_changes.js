// Change Fluid Heater IO (1 fluid output to 2)
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.FLUID_HEATER_RECIPES.setMaxIOSize(1,0,1,2);
});

// Change Fermenter IO (1 fluid input to 3)
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.FERMENTING_RECIPES.setMaxIOSize(1,1,3,1);
});