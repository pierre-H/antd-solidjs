import { StepBackwardOutlined as BaseStepBackwardOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const StepBackwardOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseStepBackwardOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-step-backward-outlined text-xl"
            role="img"
            aria-label="step-backward-outlined"
            innerHTML={svgHTMLString}
        />
    );
};