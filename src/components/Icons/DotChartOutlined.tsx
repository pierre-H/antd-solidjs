import { DotChartOutlined as BaseDotChartOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DotChartOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDotChartOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dot-chart-outlined text-xl"
            role="img"
            aria-label="dot-chart-outlined"
            innerHTML={svgHTMLString}
        />
    );
};