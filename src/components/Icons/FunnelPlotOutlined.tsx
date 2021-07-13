import { FunnelPlotOutlined as BaseFunnelPlotOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FunnelPlotOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFunnelPlotOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-funnel-plot-outlined text-xl"
            role="img"
            aria-label="funnel-plot-outlined"
            innerHTML={svgHTMLString}
        />
    );
};