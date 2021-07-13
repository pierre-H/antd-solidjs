import { SlidersFilled as BaseSlidersFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SlidersFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSlidersFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-sliders-filled text-xl"
            role="img"
            aria-label="sliders-filled"
            innerHTML={svgHTMLString}
        />
    );
};