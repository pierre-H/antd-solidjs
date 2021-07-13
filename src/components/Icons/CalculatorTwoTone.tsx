import { CalculatorTwoTone as BaseCalculatorTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CalculatorTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCalculatorTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-calculator-two-tone text-xl"
            role="img"
            aria-label="calculator-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};