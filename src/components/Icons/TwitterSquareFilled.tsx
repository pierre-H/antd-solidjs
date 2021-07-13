import { TwitterSquareFilled as BaseTwitterSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TwitterSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTwitterSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-twitter-square-filled text-xl"
            role="img"
            aria-label="twitter-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};