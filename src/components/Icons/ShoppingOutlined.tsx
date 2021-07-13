import { ShoppingOutlined as BaseShoppingOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ShoppingOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseShoppingOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-shopping-outlined text-xl"
            role="img"
            aria-label="shopping-outlined"
            innerHTML={svgHTMLString}
        />
    );
};