import { PieChartFilled as BasePieChartFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PieChartFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePieChartFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pie-chart-filled text-xl"
            role="img"
            aria-label="pie-chart-filled"
            innerHTML={svgHTMLString}
        />
    );
};