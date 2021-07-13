import { StepBackwardFilled as BaseStepBackwardFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const StepBackwardFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseStepBackwardFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-step-backward-filled text-xl"
            role="img"
            aria-label="step-backward-filled"
            innerHTML={svgHTMLString}
        />
    );
};