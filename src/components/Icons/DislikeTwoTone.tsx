import { DislikeTwoTone as BaseDislikeTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DislikeTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDislikeTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dislike-two-tone text-xl"
            role="img"
            aria-label="dislike-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};