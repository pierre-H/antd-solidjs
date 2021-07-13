import { CarFilled as BaseCarFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CarFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCarFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-car-filled text-xl"
            role="img"
            aria-label="car-filled"
            innerHTML={svgHTMLString}
        />
    );
};