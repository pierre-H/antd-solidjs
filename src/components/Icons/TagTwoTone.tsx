import { TagTwoTone as BaseTagTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TagTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTagTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-tag-two-tone text-xl"
            role="img"
            aria-label="tag-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};