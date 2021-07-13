import { SolutionOutlined as BaseSolutionOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SolutionOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSolutionOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-solution-outlined text-xl"
            role="img"
            aria-label="solution-outlined"
            innerHTML={svgHTMLString}
        />
    );
};