import { StrikethroughOutlined as BaseStrikethroughOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const StrikethroughOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseStrikethroughOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-strikethrough-outlined text-xl"
            role="img"
            aria-label="strikethrough-outlined"
            innerHTML={svgHTMLString}
        />
    );
};