import { LeftSquareFilled as BaseLeftSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LeftSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLeftSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-left-square-filled text-xl"
            role="img"
            aria-label="left-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};