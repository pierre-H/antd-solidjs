import { GiftTwoTone as BaseGiftTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GiftTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGiftTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-gift-two-tone text-xl"
            role="img"
            aria-label="gift-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};