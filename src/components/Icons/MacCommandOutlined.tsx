import { MacCommandOutlined as BaseMacCommandOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MacCommandOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMacCommandOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-mac-command-outlined text-xl"
            role="img"
            aria-label="mac-command-outlined"
            innerHTML={svgHTMLString}
        />
    );
};