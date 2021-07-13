import { ProjectFilled as BaseProjectFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ProjectFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseProjectFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-project-filled text-xl"
            role="img"
            aria-label="project-filled"
            innerHTML={svgHTMLString}
        />
    );
};