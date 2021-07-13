import { FullscreenExitOutlined as BaseFullscreenExitOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FullscreenExitOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFullscreenExitOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fullscreen-exit-outlined text-xl"
            role="img"
            aria-label="fullscreen-exit-outlined"
            innerHTML={svgHTMLString}
        />
    );
};