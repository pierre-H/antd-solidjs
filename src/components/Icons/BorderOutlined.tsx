import { BorderOutlined as BaseBorderOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BorderOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBorderOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-border-outlined text-xl"
            role="img"
            aria-label="border-outlined"
            innerHTML={svgHTMLString}
        />
    );
};