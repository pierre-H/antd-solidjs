import { AreaChartOutlined as BaseAreaChartOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AreaChartOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAreaChartOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-area-chart-outlined text-xl"
            role="img"
            aria-label="area-chart-outlined"
            innerHTML={svgHTMLString}
        />
    );
};