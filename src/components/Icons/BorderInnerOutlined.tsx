import { BorderInnerOutlined as BaseBorderInnerOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BorderInnerOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBorderInnerOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-border-inner-outlined text-xl"
            role="img"
            aria-label="border-inner-outlined"
            innerHTML={svgHTMLString}
        />
    );
};