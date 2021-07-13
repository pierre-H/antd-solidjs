import { AlibabaOutlined as BaseAlibabaOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AlibabaOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAlibabaOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-alibaba-outlined text-xl"
            role="img"
            aria-label="alibaba-outlined"
            innerHTML={svgHTMLString}
        />
    );
};