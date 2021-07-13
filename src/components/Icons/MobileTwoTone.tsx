import { MobileTwoTone as BaseMobileTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MobileTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMobileTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-mobile-two-tone text-xl"
            role="img"
            aria-label="mobile-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};