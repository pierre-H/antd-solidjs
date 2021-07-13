import { index as Baseindex } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const index = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(Baseindex, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-index text-xl"
            role="img"
            aria-label="index"
            innerHTML={svgHTMLString}
        />
    );
};