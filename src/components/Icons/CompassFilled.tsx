import { CompassFilled as BaseCompassFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CompassFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCompassFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-compass-filled text-xl"
            role="img"
            aria-label="compass-filled"
            innerHTML={svgHTMLString}
        />
    );
};