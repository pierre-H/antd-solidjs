import { ClockCircleTwoTone as BaseClockCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ClockCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseClockCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-clock-circle-two-tone text-xl"
            role="img"
            aria-label="clock-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};