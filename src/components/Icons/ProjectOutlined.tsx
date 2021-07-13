import { ProjectOutlined as BaseProjectOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ProjectOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseProjectOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-project-outlined text-xl"
            role="img"
            aria-label="project-outlined"
            innerHTML={svgHTMLString}
        />
    );
};