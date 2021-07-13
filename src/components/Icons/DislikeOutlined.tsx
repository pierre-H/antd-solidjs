import { DislikeOutlined as BaseDislikeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DislikeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDislikeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dislike-outlined text-xl"
            role="img"
            aria-label="dislike-outlined"
            innerHTML={svgHTMLString}
        />
    );
};