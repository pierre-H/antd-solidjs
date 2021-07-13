import { CarryOutFilled as BaseCarryOutFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CarryOutFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCarryOutFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-carry-out-filled text-xl"
            role="img"
            aria-label="carry-out-filled"
            innerHTML={svgHTMLString}
        />
    );
};