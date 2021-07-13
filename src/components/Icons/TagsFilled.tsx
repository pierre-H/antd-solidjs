import { TagsFilled as BaseTagsFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TagsFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTagsFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-tags-filled text-xl"
            role="img"
            aria-label="tags-filled"
            innerHTML={svgHTMLString}
        />
    );
};