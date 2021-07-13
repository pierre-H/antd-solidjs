import { UpSquareFilled as BaseUpSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UpSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUpSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-up-square-filled text-xl"
            role="img"
            aria-label="up-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};