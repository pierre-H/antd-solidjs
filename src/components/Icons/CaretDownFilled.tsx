import { CaretDownFilled as BaseCaretDownFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CaretDownFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCaretDownFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-caret-down-filled text-xl"
            role="img"
            aria-label="caret-down-filled"
            innerHTML={svgHTMLString}
        />
    );
};