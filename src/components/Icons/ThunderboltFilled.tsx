import { ThunderboltFilled as BaseThunderboltFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ThunderboltFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseThunderboltFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-thunderbolt-filled text-xl"
            role="img"
            aria-label="thunderbolt-filled"
            innerHTML={svgHTMLString}
        />
    );
};