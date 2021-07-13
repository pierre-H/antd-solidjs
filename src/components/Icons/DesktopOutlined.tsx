import { DesktopOutlined as BaseDesktopOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DesktopOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDesktopOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-desktop-outlined text-xl"
            role="img"
            aria-label="desktop-outlined"
            innerHTML={svgHTMLString}
        />
    );
};