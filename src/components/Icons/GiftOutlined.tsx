import { GiftOutlined as BaseGiftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GiftOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGiftOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-gift-outlined text-xl"
            role="img"
            aria-label="gift-outlined"
            innerHTML={svgHTMLString}
        />
    );
};