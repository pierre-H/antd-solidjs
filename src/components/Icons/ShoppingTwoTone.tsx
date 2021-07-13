import { ShoppingTwoTone as BaseShoppingTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ShoppingTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseShoppingTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-shopping-two-tone text-xl"
            role="img"
            aria-label="shopping-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};