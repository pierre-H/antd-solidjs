import { CarOutlined as BaseCarOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CarOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCarOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-car-outlined text-xl"
            role="img"
            aria-label="car-outlined"
            innerHTML={svgHTMLString}
        />
    );
};