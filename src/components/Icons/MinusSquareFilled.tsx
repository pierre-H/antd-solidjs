import { MinusSquareFilled as BaseMinusSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MinusSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMinusSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-minus-square-filled text-xl"
            role="img"
            aria-label="minus-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};