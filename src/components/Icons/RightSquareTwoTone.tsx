import { RightSquareTwoTone as BaseRightSquareTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RightSquareTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRightSquareTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-right-square-two-tone text-xl"
            role="img"
            aria-label="right-square-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};