import { GithubFilled as BaseGithubFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GithubFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGithubFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-github-filled text-xl"
            role="img"
            aria-label="github-filled"
            innerHTML={svgHTMLString}
        />
    );
};