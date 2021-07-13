import { GoldTwoTone as BaseGoldTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GoldTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGoldTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-gold-two-tone text-xl"
            role="img"
            aria-label="gold-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};