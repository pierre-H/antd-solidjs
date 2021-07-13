import { BugOutlined as BaseBugOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BugOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBugOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bug-outlined text-xl"
            role="img"
            aria-label="bug-outlined"
            innerHTML={svgHTMLString}
        />
    );
};