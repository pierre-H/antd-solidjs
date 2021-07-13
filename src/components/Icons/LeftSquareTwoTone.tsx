import { LeftSquareTwoTone as BaseLeftSquareTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LeftSquareTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLeftSquareTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-left-square-two-tone text-xl"
            role="img"
            aria-label="left-square-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};