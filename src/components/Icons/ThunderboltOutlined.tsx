import { ThunderboltOutlined as BaseThunderboltOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ThunderboltOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseThunderboltOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-thunderbolt-outlined text-xl"
            role="img"
            aria-label="thunderbolt-outlined"
            innerHTML={svgHTMLString}
        />
    );
};