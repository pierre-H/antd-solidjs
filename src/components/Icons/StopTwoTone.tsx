import { StopTwoTone as BaseStopTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const StopTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseStopTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-stop-two-tone text-xl"
            role="img"
            aria-label="stop-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};