import { BorderHorizontalOutlined as BaseBorderHorizontalOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BorderHorizontalOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBorderHorizontalOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-border-horizontal-outlined text-xl"
            role="img"
            aria-label="border-horizontal-outlined"
            innerHTML={svgHTMLString}
        />
    );
};