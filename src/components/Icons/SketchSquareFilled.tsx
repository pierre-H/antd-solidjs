import { SketchSquareFilled as BaseSketchSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SketchSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSketchSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-sketch-square-filled text-xl"
            role="img"
            aria-label="sketch-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};