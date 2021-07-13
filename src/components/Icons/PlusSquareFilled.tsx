import { PlusSquareFilled as BasePlusSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PlusSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePlusSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-plus-square-filled text-xl"
            role="img"
            aria-label="plus-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};