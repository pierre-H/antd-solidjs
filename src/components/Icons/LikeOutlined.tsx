import { LikeOutlined as BaseLikeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LikeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLikeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-like-outlined text-xl"
            role="img"
            aria-label="like-outlined"
            innerHTML={svgHTMLString}
        />
    );
};