import { SkinOutlined as BaseSkinOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SkinOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSkinOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-skin-outlined text-xl"
            role="img"
            aria-label="skin-outlined"
            innerHTML={svgHTMLString}
        />
    );
};