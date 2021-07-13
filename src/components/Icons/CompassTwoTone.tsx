import { CompassTwoTone as BaseCompassTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CompassTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCompassTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-compass-two-tone text-xl"
            role="img"
            aria-label="compass-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};