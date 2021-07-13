import { SketchOutlined as BaseSketchOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SketchOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSketchOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-sketch-outlined text-xl"
            role="img"
            aria-label="sketch-outlined"
            innerHTML={svgHTMLString}
        />
    );
};