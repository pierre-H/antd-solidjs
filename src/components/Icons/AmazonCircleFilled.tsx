import { AmazonCircleFilled as BaseAmazonCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AmazonCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAmazonCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-amazon-circle-filled text-xl"
            role="img"
            aria-label="amazon-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};