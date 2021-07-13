import { HighlightOutlined as BaseHighlightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HighlightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHighlightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-highlight-outlined text-xl"
            role="img"
            aria-label="highlight-outlined"
            innerHTML={svgHTMLString}
        />
    );
};