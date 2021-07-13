import { MinusCircleTwoTone as BaseMinusCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MinusCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMinusCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-minus-circle-two-tone text-xl"
            role="img"
            aria-label="minus-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};