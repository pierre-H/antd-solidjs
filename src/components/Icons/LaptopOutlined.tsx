import { LaptopOutlined as BaseLaptopOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LaptopOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLaptopOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-laptop-outlined text-xl"
            role="img"
            aria-label="laptop-outlined"
            innerHTML={svgHTMLString}
        />
    );
};