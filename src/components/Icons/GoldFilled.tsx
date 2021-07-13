import { GoldFilled as BaseGoldFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GoldFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGoldFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-gold-filled text-xl"
            role="img"
            aria-label="gold-filled"
            innerHTML={svgHTMLString}
        />
    );
};