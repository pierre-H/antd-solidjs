import { HighlightTwoTone as BaseHighlightTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HighlightTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHighlightTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-highlight-two-tone text-xl"
            role="img"
            aria-label="highlight-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};