import { CalendarFilled as BaseCalendarFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CalendarFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCalendarFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-calendar-filled text-xl"
            role="img"
            aria-label="calendar-filled"
            innerHTML={svgHTMLString}
        />
    );
};