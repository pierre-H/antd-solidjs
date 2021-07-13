import { StarOutlined as BaseStarOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const StarOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseStarOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-star-outlined text-xl"
            role="img"
            aria-label="star-outlined"
            innerHTML={svgHTMLString}
        />
    );
};