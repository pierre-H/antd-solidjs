import { HourglassFilled as BaseHourglassFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HourglassFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHourglassFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-hourglass-filled text-xl"
            role="img"
            aria-label="hourglass-filled"
            innerHTML={svgHTMLString}
        />
    );
};