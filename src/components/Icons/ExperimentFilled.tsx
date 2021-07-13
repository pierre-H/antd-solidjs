import { ExperimentFilled as BaseExperimentFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ExperimentFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseExperimentFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-experiment-filled text-xl"
            role="img"
            aria-label="experiment-filled"
            innerHTML={svgHTMLString}
        />
    );
};