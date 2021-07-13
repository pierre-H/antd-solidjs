import { ToolFilled as BaseToolFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ToolFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseToolFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-tool-filled text-xl"
            role="img"
            aria-label="tool-filled"
            innerHTML={svgHTMLString}
        />
    );
};