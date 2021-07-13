import { DollarCircleTwoTone as BaseDollarCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DollarCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDollarCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dollar-circle-two-tone text-xl"
            role="img"
            aria-label="dollar-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};