import { VerticalLeftOutlined as BaseVerticalLeftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const VerticalLeftOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseVerticalLeftOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-vertical-left-outlined text-xl"
            role="img"
            aria-label="vertical-left-outlined"
            innerHTML={svgHTMLString}
        />
    );
};