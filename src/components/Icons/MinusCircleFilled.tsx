import { MinusCircleFilled as BaseMinusCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MinusCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMinusCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-minus-circle-filled text-xl"
            role="img"
            aria-label="minus-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};