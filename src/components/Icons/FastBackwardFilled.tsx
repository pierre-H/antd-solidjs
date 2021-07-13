import { FastBackwardFilled as BaseFastBackwardFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FastBackwardFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFastBackwardFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fast-backward-filled text-xl"
            role="img"
            aria-label="fast-backward-filled"
            innerHTML={svgHTMLString}
        />
    );
};