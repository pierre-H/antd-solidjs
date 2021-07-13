import { FunnelPlotFilled as BaseFunnelPlotFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FunnelPlotFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFunnelPlotFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-funnel-plot-filled text-xl"
            role="img"
            aria-label="funnel-plot-filled"
            innerHTML={svgHTMLString}
        />
    );
};