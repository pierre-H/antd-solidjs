import { TagsOutlined as BaseTagsOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TagsOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTagsOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-tags-outlined text-xl"
            role="img"
            aria-label="tags-outlined"
            innerHTML={svgHTMLString}
        />
    );
};