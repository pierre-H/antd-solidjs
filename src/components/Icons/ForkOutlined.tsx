import { ForkOutlined as BaseForkOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ForkOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseForkOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fork-outlined text-xl"
            role="img"
            aria-label="fork-outlined"
            innerHTML={svgHTMLString}
        />
    );
};