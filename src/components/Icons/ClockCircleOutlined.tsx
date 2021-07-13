import { ClockCircleOutlined as BaseClockCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ClockCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseClockCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-clock-circle-outlined text-xl"
            role="img"
            aria-label="clock-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};