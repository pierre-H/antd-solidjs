import { DollarCircleFilled as BaseDollarCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DollarCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDollarCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dollar-circle-filled text-xl"
            role="img"
            aria-label="dollar-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};