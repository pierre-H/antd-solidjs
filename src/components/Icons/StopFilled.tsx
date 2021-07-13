import { StopFilled as BaseStopFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const StopFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseStopFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-stop-filled text-xl"
            role="img"
            aria-label="stop-filled"
            innerHTML={svgHTMLString}
        />
    );
};