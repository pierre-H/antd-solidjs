import { CloseSquareFilled as BaseCloseSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloseSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloseSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-close-square-filled text-xl"
            role="img"
            aria-label="close-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};