import { CalendarOutlined as BaseCalendarOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CalendarOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCalendarOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-calendar-outlined text-xl"
            role="img"
            aria-label="calendar-outlined"
            innerHTML={svgHTMLString}
        />
    );
};