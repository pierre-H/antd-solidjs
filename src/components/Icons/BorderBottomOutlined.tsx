import { BorderBottomOutlined as BaseBorderBottomOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BorderBottomOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBorderBottomOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-border-bottom-outlined text-xl"
            role="img"
            aria-label="border-bottom-outlined"
            innerHTML={svgHTMLString}
        />
    );
};