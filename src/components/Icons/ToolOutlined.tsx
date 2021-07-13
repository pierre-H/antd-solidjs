import { ToolOutlined as BaseToolOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ToolOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseToolOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-tool-outlined text-xl"
            role="img"
            aria-label="tool-outlined"
            innerHTML={svgHTMLString}
        />
    );
};