import { VerticalAlignTopOutlined as BaseVerticalAlignTopOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const VerticalAlignTopOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseVerticalAlignTopOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-vertical-align-top-outlined text-xl"
            role="img"
            aria-label="vertical-align-top-outlined"
            innerHTML={svgHTMLString}
        />
    );
};