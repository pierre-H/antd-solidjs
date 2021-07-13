import { CalendarTwoTone as BaseCalendarTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CalendarTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCalendarTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-calendar-two-tone text-xl"
            role="img"
            aria-label="calendar-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};