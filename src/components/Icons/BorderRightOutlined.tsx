import { BorderRightOutlined as BaseBorderRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BorderRightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBorderRightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-border-right-outlined text-xl"
            role="img"
            aria-label="border-right-outlined"
            innerHTML={svgHTMLString}
        />
    );
};