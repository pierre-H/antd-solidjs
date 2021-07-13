import { Html5TwoTone as BaseHtml5TwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const Html5TwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHtml5TwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-html5-two-tone text-xl"
            role="img"
            aria-label="html5-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};