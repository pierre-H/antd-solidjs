import { RightSquareFilled as BaseRightSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RightSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRightSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-right-square-filled text-xl"
            role="img"
            aria-label="right-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};