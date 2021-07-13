import { TagsTwoTone as BaseTagsTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TagsTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTagsTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-tags-two-tone text-xl"
            role="img"
            aria-label="tags-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};