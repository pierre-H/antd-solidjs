import { CalculatorOutlined as BaseCalculatorOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CalculatorOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCalculatorOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-calculator-outlined text-xl"
            role="img"
            aria-label="calculator-outlined"
            innerHTML={svgHTMLString}
        />
    );
};