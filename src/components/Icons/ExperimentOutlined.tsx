import { ExperimentOutlined as BaseExperimentOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ExperimentOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseExperimentOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-experiment-outlined text-xl"
            role="img"
            aria-label="experiment-outlined"
            innerHTML={svgHTMLString}
        />
    );
};