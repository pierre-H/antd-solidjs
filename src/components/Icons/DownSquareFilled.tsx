import { DownSquareFilled as BaseDownSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DownSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDownSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-down-square-filled text-xl"
            role="img"
            aria-label="down-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};