import { PieChartTwoTone as BasePieChartTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PieChartTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePieChartTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pie-chart-two-tone text-xl"
            role="img"
            aria-label="pie-chart-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};