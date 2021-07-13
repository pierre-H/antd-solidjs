import { GitlabOutlined as BaseGitlabOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GitlabOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGitlabOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-gitlab-outlined text-xl"
            role="img"
            aria-label="gitlab-outlined"
            innerHTML={svgHTMLString}
        />
    );
};