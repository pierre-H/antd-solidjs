import { ScheduleOutlined as BaseScheduleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ScheduleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseScheduleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-schedule-outlined text-xl"
            role="img"
            aria-label="schedule-outlined"
            innerHTML={svgHTMLString}
        />
    );
};