import { GithubOutlined as BaseGithubOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GithubOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGithubOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-github-outlined text-xl"
            role="img"
            aria-label="github-outlined"
            innerHTML={svgHTMLString}
        />
    );
};