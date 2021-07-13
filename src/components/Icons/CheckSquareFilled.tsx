import { CheckSquareFilled as BaseCheckSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CheckSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCheckSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-check-square-filled text-xl"
            role="img"
            aria-label="check-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};