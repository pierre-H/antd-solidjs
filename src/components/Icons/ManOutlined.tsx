import { ManOutlined as BaseManOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ManOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseManOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-man-outlined text-xl"
            role="img"
            aria-label="man-outlined"
            innerHTML={svgHTMLString}
        />
    );
};