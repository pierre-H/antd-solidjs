import { StarFilled as BaseStarFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const StarFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseStarFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-star-filled text-xl"
            role="img"
            aria-label="star-filled"
            innerHTML={svgHTMLString}
        />
    );
};