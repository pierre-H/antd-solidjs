import { ShopFilled as BaseShopFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ShopFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseShopFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-shop-filled text-xl"
            role="img"
            aria-label="shop-filled"
            innerHTML={svgHTMLString}
        />
    );
};