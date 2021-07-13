import { LikeTwoTone as BaseLikeTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LikeTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLikeTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-like-two-tone text-xl"
            role="img"
            aria-label="like-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};