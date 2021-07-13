import { MinusSquareTwoTone as BaseMinusSquareTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MinusSquareTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMinusSquareTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-minus-square-two-tone text-xl"
            role="img"
            aria-label="minus-square-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};