import { RadiusUprightOutlined as BaseRadiusUprightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RadiusUprightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRadiusUprightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-radius-upright-outlined text-xl"
            role="img"
            aria-label="radius-upright-outlined"
            innerHTML={svgHTMLString}
        />
    );
};