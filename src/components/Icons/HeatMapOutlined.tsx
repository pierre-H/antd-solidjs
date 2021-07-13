import { HeatMapOutlined as BaseHeatMapOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HeatMapOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHeatMapOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-heat-map-outlined text-xl"
            role="img"
            aria-label="heat-map-outlined"
            innerHTML={svgHTMLString}
        />
    );
};