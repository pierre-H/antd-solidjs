import { FunnelPlotTwoTone as BaseFunnelPlotTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FunnelPlotTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFunnelPlotTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-funnel-plot-two-tone text-xl"
            role="img"
            aria-label="funnel-plot-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};