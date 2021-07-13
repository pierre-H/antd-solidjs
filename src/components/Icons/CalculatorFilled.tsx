import { CalculatorFilled as BaseCalculatorFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CalculatorFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCalculatorFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-calculator-filled text-xl"
            role="img"
            aria-label="calculator-filled"
            innerHTML={svgHTMLString}
        />
    );
};