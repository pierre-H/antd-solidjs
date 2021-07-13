import { MacCommandFilled as BaseMacCommandFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MacCommandFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMacCommandFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-mac-command-filled text-xl"
            role="img"
            aria-label="mac-command-filled"
            innerHTML={svgHTMLString}
        />
    );
};