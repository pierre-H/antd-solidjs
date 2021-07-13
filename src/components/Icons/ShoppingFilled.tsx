import { ShoppingFilled as BaseShoppingFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ShoppingFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseShoppingFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-shopping-filled text-xl"
            role="img"
            aria-label="shopping-filled"
            innerHTML={svgHTMLString}
        />
    );
};