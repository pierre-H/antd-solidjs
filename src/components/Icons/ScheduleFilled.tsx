import { ScheduleFilled as BaseScheduleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ScheduleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseScheduleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-schedule-filled text-xl"
            role="img"
            aria-label="schedule-filled"
            innerHTML={svgHTMLString}
        />
    );
};