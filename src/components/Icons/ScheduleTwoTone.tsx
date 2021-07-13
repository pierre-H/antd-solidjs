import { ScheduleTwoTone as BaseScheduleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ScheduleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseScheduleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-schedule-two-tone text-xl"
            role="img"
            aria-label="schedule-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};