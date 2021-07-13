import { CaretDownOutlined as BaseCaretDownOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CaretDownOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCaretDownOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-caret-down-outlined text-xl"
            role="img"
            aria-label="caret-down-outlined"
            innerHTML={svgHTMLString}
        />
    );
};