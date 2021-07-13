import { StepForwardOutlined as BaseStepForwardOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const StepForwardOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseStepForwardOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-step-forward-outlined text-xl"
            role="img"
            aria-label="step-forward-outlined"
            innerHTML={svgHTMLString}
        />
    );
};