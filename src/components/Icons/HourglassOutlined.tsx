import { HourglassOutlined as BaseHourglassOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HourglassOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHourglassOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-hourglass-outlined text-xl"
            role="img"
            aria-label="hourglass-outlined"
            innerHTML={svgHTMLString}
        />
    );
};