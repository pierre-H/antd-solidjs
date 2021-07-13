import { ExpandAltOutlined as BaseExpandAltOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ExpandAltOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseExpandAltOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-expand-alt-outlined text-xl"
            role="img"
            aria-label="expand-alt-outlined"
            innerHTML={svgHTMLString}
        />
    );
};