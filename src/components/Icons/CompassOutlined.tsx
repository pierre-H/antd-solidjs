import { CompassOutlined as BaseCompassOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CompassOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCompassOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-compass-outlined text-xl"
            role="img"
            aria-label="compass-outlined"
            innerHTML={svgHTMLString}
        />
    );
};