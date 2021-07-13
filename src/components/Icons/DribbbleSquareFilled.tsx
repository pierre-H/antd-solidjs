import { DribbbleSquareFilled as BaseDribbbleSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DribbbleSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDribbbleSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dribbble-square-filled text-xl"
            role="img"
            aria-label="dribbble-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};