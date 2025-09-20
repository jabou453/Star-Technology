const $Component = Java.loadClass("net.minecraft.network.chat.Component");
const $TooltipHelper = Java.loadClass("com.gregtechceu.gtceu.client.util.TooltipHelper");

const method = getWithStyleMethod();
// const method = $Component.literal("").getClass().getMethod("m_130938_", Java.loadClass("java.util.function.UnaryOperator"));

function getWithStyleMethod() {
    const methods = $Component.literal("").getClass().getMethods();

    for (let i = 0; i < methods.length; i++) {
        let params = methods[i].getParameterTypes();
        if (params.length === 1 && params[0].getName() === "java.util.function.UnaryOperator") {
            return methods[i];
        }
    }
}

ItemEvents.tooltip(event => {
    event.addAdvanced('gtceu:supreme_plasma_turbine', (item, advanced, text) => {
        const styled = $Component.translatable("block.gtceu.any.tooltip.can_use")
            .append(method.invoke($Component.translatable("block.gtceu.any.tooltip.laser_hatch"), $TooltipHelper.RAINBOW_HSL_SLOW))
            .append($Component.literal("§7."));
        text.add(styled);
    });

    event.addAdvanced('gtceu:nyinsane_plasma_turbine', (item, advanced, text) => {
        const styled = $Component.translatable("block.gtceu.any.tooltip.can_use")
            .append(method.invoke($Component.translatable("block.gtceu.any.tooltip.laser_hatch"), $TooltipHelper.RAINBOW_HSL_SLOW))
            .append($Component.literal("§7."));
        text.add(styled);
    });
});
