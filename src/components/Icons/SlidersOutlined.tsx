import { SlidersOutlined as BaseSlidersOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SlidersOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSlidersOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-sliders-outlined text-xl"
            role="img"
            aria-label="sliders-outlined"
            innerHTML={svgHTMLString}
        />
    );
};