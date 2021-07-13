import { DollarTwoTone as BaseDollarTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DollarTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDollarTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dollar-two-tone text-xl"
            role="img"
            aria-label="dollar-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};