import { MobileFilled as BaseMobileFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MobileFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMobileFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-mobile-filled text-xl"
            role="img"
            aria-label="mobile-filled"
            innerHTML={svgHTMLString}
        />
    );
};