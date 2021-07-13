import { PieChartOutlined as BasePieChartOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PieChartOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePieChartOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pie-chart-outlined text-xl"
            role="img"
            aria-label="pie-chart-outlined"
            innerHTML={svgHTMLString}
        />
    );
};