import { FormatPainterOutlined as BaseFormatPainterOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FormatPainterOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFormatPainterOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-format-painter-outlined text-xl"
            role="img"
            aria-label="format-painter-outlined"
            innerHTML={svgHTMLString}
        />
    );
};