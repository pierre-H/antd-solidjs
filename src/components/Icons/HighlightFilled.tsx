import { HighlightFilled as BaseHighlightFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HighlightFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHighlightFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-highlight-filled text-xl"
            role="img"
            aria-label="highlight-filled"
            innerHTML={svgHTMLString}
        />
    );
};