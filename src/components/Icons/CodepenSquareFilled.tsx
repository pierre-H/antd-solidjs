import { CodepenSquareFilled as BaseCodepenSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CodepenSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCodepenSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-codepen-square-filled text-xl"
            role="img"
            aria-label="codepen-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};