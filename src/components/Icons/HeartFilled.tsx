import { HeartFilled as BaseHeartFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HeartFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHeartFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-heart-filled text-xl"
            role="img"
            aria-label="heart-filled"
            innerHTML={svgHTMLString}
        />
    );
};