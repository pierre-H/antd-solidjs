import { ShoppingCartOutlined as BaseShoppingCartOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ShoppingCartOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseShoppingCartOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-shopping-cart-outlined text-xl"
            role="img"
            aria-label="shopping-cart-outlined"
            innerHTML={svgHTMLString}
        />
    );
};