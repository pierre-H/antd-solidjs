import { GitlabFilled as BaseGitlabFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GitlabFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGitlabFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-gitlab-filled text-xl"
            role="img"
            aria-label="gitlab-filled"
            innerHTML={svgHTMLString}
        />
    );
};