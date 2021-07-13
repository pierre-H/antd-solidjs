import { ShopTwoTone as BaseShopTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ShopTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseShopTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-shop-two-tone text-xl"
            role="img"
            aria-label="shop-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};