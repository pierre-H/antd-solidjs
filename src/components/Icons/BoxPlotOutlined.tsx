import { BoxPlotOutlined as BaseBoxPlotOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BoxPlotOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBoxPlotOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-box-plot-outlined text-xl"
            role="img"
            aria-label="box-plot-outlined"
            innerHTML={svgHTMLString}
        />
    );
};