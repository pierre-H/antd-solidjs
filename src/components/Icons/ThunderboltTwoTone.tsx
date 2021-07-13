import { ThunderboltTwoTone as BaseThunderboltTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ThunderboltTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseThunderboltTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-thunderbolt-two-tone text-xl"
            role="img"
            aria-label="thunderbolt-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};