import { TagOutlined as BaseTagOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TagOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTagOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-tag-outlined text-xl"
            role="img"
            aria-label="tag-outlined"
            innerHTML={svgHTMLString}
        />
    );
};