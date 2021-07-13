import { BoxPlotTwoTone as BaseBoxPlotTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BoxPlotTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBoxPlotTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-box-plot-two-tone text-xl"
            role="img"
            aria-label="box-plot-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};