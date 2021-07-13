import { RadarChartOutlined as BaseRadarChartOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RadarChartOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRadarChartOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-radar-chart-outlined text-xl"
            role="img"
            aria-label="radar-chart-outlined"
            innerHTML={svgHTMLString}
        />
    );
};