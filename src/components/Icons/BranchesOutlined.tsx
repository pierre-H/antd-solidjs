import { BranchesOutlined as BaseBranchesOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BranchesOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBranchesOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-branches-outlined text-xl"
            role="img"
            aria-label="branches-outlined"
            innerHTML={svgHTMLString}
        />
    );
};