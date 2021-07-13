import { LineChartOutlined as BaseLineChartOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LineChartOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLineChartOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-line-chart-outlined text-xl"
            role="img"
            aria-label="line-chart-outlined"
            innerHTML={svgHTMLString}
        />
    );
};