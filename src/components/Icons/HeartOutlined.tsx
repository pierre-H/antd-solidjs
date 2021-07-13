import { HeartOutlined as BaseHeartOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HeartOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHeartOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-heart-outlined text-xl"
            role="img"
            aria-label="heart-outlined"
            innerHTML={svgHTMLString}
        />
    );
};