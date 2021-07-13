import { RadiusUpleftOutlined as BaseRadiusUpleftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RadiusUpleftOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRadiusUpleftOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-radius-upleft-outlined text-xl"
            role="img"
            aria-label="radius-upleft-outlined"
            innerHTML={svgHTMLString}
        />
    );
};