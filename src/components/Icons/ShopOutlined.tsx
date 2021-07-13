import { ShopOutlined as BaseShopOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ShopOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseShopOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-shop-outlined text-xl"
            role="img"
            aria-label="shop-outlined"
            innerHTML={svgHTMLString}
        />
    );
};