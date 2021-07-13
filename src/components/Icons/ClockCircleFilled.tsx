import { ClockCircleFilled as BaseClockCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ClockCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseClockCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-clock-circle-filled text-xl"
            role="img"
            aria-label="clock-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};