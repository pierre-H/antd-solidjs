import { FastBackwardOutlined as BaseFastBackwardOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FastBackwardOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFastBackwardOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fast-backward-outlined text-xl"
            role="img"
            aria-label="fast-backward-outlined"
            innerHTML={svgHTMLString}
        />
    );
};