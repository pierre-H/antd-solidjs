import { RadiusBottomleftOutlined as BaseRadiusBottomleftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RadiusBottomleftOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRadiusBottomleftOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-radius-bottomleft-outlined text-xl"
            role="img"
            aria-label="radius-bottomleft-outlined"
            innerHTML={svgHTMLString}
        />
    );
};