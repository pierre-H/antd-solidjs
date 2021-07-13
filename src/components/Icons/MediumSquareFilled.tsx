import { MediumSquareFilled as BaseMediumSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MediumSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMediumSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-medium-square-filled text-xl"
            role="img"
            aria-label="medium-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};