import { ProjectTwoTone as BaseProjectTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ProjectTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseProjectTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-project-two-tone text-xl"
            role="img"
            aria-label="project-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};