import { FontColorsOutlined as BaseFontColorsOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FontColorsOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFontColorsOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-font-colors-outlined text-xl"
            role="img"
            aria-label="font-colors-outlined"
            innerHTML={svgHTMLString}
        />
    );
};