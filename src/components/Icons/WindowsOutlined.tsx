import { WindowsOutlined as BaseWindowsOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WindowsOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWindowsOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-windows-outlined text-xl"
            role="img"
            aria-label="windows-outlined"
            innerHTML={svgHTMLString}
        />
    );
};