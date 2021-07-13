import { PullRequestOutlined as BasePullRequestOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PullRequestOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePullRequestOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pull-request-outlined text-xl"
            role="img"
            aria-label="pull-request-outlined"
            innerHTML={svgHTMLString}
        />
    );
};