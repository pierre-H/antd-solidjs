import { IssuesCloseOutlined as BaseIssuesCloseOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const IssuesCloseOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseIssuesCloseOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-issues-close-outlined text-xl"
            role="img"
            aria-label="issues-close-outlined"
            innerHTML={svgHTMLString}
        />
    );
};