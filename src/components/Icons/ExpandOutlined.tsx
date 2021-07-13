import { ExpandOutlined as BaseExpandOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ExpandOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseExpandOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-expand-outlined text-xl"
            role="img"
            aria-label="expand-outlined"
            innerHTML={svgHTMLString}
        />
    );
};