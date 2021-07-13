import { LineHeightOutlined as BaseLineHeightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LineHeightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLineHeightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-line-height-outlined text-xl"
            role="img"
            aria-label="line-height-outlined"
            innerHTML={svgHTMLString}
        />
    );
};