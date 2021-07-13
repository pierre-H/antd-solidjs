import { LineOutlined as BaseLineOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LineOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLineOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-line-outlined text-xl"
            role="img"
            aria-label="line-outlined"
            innerHTML={svgHTMLString}
        />
    );
};