import { BgColorsOutlined as BaseBgColorsOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BgColorsOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBgColorsOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bg-colors-outlined text-xl"
            role="img"
            aria-label="bg-colors-outlined"
            innerHTML={svgHTMLString}
        />
    );
};