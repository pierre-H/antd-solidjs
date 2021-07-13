import { IeSquareFilled as BaseIeSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const IeSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseIeSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-ie-square-filled text-xl"
            role="img"
            aria-label="ie-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};