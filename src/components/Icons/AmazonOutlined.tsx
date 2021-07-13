import { AmazonOutlined as BaseAmazonOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AmazonOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAmazonOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-amazon-outlined text-xl"
            role="img"
            aria-label="amazon-outlined"
            innerHTML={svgHTMLString}
        />
    );
};