import { BorderTopOutlined as BaseBorderTopOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BorderTopOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBorderTopOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-border-top-outlined text-xl"
            role="img"
            aria-label="border-top-outlined"
            innerHTML={svgHTMLString}
        />
    );
};