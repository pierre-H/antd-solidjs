import { ExperimentTwoTone as BaseExperimentTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ExperimentTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseExperimentTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-experiment-two-tone text-xl"
            role="img"
            aria-label="experiment-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};