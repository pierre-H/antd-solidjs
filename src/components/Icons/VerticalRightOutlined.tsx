import { VerticalRightOutlined as BaseVerticalRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const VerticalRightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseVerticalRightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-vertical-right-outlined text-xl"
            role="img"
            aria-label="vertical-right-outlined"
            innerHTML={svgHTMLString}
        />
    );
};