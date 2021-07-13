import { FullscreenOutlined as BaseFullscreenOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FullscreenOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFullscreenOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fullscreen-outlined text-xl"
            role="img"
            aria-label="fullscreen-outlined"
            innerHTML={svgHTMLString}
        />
    );
};