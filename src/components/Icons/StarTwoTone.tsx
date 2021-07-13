import { StarTwoTone as BaseStarTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const StarTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseStarTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-star-two-tone text-xl"
            role="img"
            aria-label="star-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};