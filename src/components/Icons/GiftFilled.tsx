import { GiftFilled as BaseGiftFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GiftFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGiftFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-gift-filled text-xl"
            role="img"
            aria-label="gift-filled"
            innerHTML={svgHTMLString}
        />
    );
};