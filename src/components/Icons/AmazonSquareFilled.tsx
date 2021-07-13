import { AmazonSquareFilled as BaseAmazonSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AmazonSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAmazonSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-amazon-square-filled text-xl"
            role="img"
            aria-label="amazon-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};