import { RadiusBottomrightOutlined as BaseRadiusBottomrightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RadiusBottomrightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRadiusBottomrightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-radius-bottomright-outlined text-xl"
            role="img"
            aria-label="radius-bottomright-outlined"
            innerHTML={svgHTMLString}
        />
    );
};