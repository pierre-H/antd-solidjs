import { ToolTwoTone as BaseToolTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ToolTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseToolTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-tool-two-tone text-xl"
            role="img"
            aria-label="tool-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};