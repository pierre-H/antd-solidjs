import { VerticalAlignBottomOutlined as BaseVerticalAlignBottomOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const VerticalAlignBottomOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseVerticalAlignBottomOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-vertical-align-bottom-outlined text-xl"
            role="img"
            aria-label="vertical-align-bottom-outlined"
            innerHTML={svgHTMLString}
        />
    );
};