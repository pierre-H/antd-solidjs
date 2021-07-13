import { FormatPainterFilled as BaseFormatPainterFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FormatPainterFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFormatPainterFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-format-painter-filled text-xl"
            role="img"
            aria-label="format-painter-filled"
            innerHTML={svgHTMLString}
        />
    );
};