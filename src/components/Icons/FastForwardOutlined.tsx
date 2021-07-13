import { FastForwardOutlined as BaseFastForwardOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FastForwardOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFastForwardOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fast-forward-outlined text-xl"
            role="img"
            aria-label="fast-forward-outlined"
            innerHTML={svgHTMLString}
        />
    );
};