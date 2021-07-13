import { SketchCircleFilled as BaseSketchCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SketchCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSketchCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-sketch-circle-filled text-xl"
            role="img"
            aria-label="sketch-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};