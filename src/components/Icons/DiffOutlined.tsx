import { DiffOutlined as BaseDiffOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DiffOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDiffOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-diff-outlined text-xl"
            role="img"
            aria-label="diff-outlined"
            innerHTML={svgHTMLString}
        />
    );
};