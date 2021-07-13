import { CompressOutlined as BaseCompressOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CompressOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCompressOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-compress-outlined text-xl"
            role="img"
            aria-label="compress-outlined"
            innerHTML={svgHTMLString}
        />
    );
};