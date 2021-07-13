import { CarTwoTone as BaseCarTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CarTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCarTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-car-two-tone text-xl"
            role="img"
            aria-label="car-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};