import { BoxPlotFilled as BaseBoxPlotFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BoxPlotFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBoxPlotFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-box-plot-filled text-xl"
            role="img"
            aria-label="box-plot-filled"
            innerHTML={svgHTMLString}
        />
    );
};