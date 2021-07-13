import { NumberOutlined as BaseNumberOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const NumberOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseNumberOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-number-outlined text-xl"
            role="img"
            aria-label="number-outlined"
            innerHTML={svgHTMLString}
        />
    );
};