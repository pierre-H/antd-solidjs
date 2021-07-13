import { VerticalAlignMiddleOutlined as BaseVerticalAlignMiddleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const VerticalAlignMiddleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseVerticalAlignMiddleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-vertical-align-middle-outlined text-xl"
            role="img"
            aria-label="vertical-align-middle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};