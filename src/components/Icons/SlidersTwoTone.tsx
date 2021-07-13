import { SlidersTwoTone as BaseSlidersTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SlidersTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSlidersTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-sliders-two-tone text-xl"
            role="img"
            aria-label="sliders-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};