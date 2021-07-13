import { BorderOuterOutlined as BaseBorderOuterOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BorderOuterOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBorderOuterOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-border-outer-outlined text-xl"
            role="img"
            aria-label="border-outer-outlined"
            innerHTML={svgHTMLString}
        />
    );
};