import { StepForwardFilled as BaseStepForwardFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const StepForwardFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseStepForwardFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-step-forward-filled text-xl"
            role="img"
            aria-label="step-forward-filled"
            innerHTML={svgHTMLString}
        />
    );
};