import { FontSizeOutlined as BaseFontSizeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FontSizeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFontSizeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-font-size-outlined text-xl"
            role="img"
            aria-label="font-size-outlined"
            innerHTML={svgHTMLString}
        />
    );
};