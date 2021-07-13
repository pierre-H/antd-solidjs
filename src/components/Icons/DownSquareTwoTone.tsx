import { DownSquareTwoTone as BaseDownSquareTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DownSquareTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDownSquareTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-down-square-two-tone text-xl"
            role="img"
            aria-label="down-square-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};