import { FastForwardFilled as BaseFastForwardFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FastForwardFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFastForwardFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fast-forward-filled text-xl"
            role="img"
            aria-label="fast-forward-filled"
            innerHTML={svgHTMLString}
        />
    );
};