import { Html5Outlined as BaseHtml5Outlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const Html5Outlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHtml5Outlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-html5-outlined text-xl"
            role="img"
            aria-label="html5-outlined"
            innerHTML={svgHTMLString}
        />
    );
};