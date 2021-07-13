import { Html5Filled as BaseHtml5Filled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const Html5Filled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHtml5Filled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-html5-filled text-xl"
            role="img"
            aria-label="html5-filled"
            innerHTML={svgHTMLString}
        />
    );
};