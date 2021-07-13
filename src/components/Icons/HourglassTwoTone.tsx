import { HourglassTwoTone as BaseHourglassTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HourglassTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHourglassTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-hourglass-two-tone text-xl"
            role="img"
            aria-label="hourglass-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};