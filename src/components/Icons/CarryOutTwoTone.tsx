import { CarryOutTwoTone as BaseCarryOutTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CarryOutTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCarryOutTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-carry-out-two-tone text-xl"
            role="img"
            aria-label="carry-out-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};