import { BarChartOutlined as BaseBarChartOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BarChartOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBarChartOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bar-chart-outlined text-xl"
            role="img"
            aria-label="bar-chart-outlined"
            innerHTML={svgHTMLString}
        />
    );
};