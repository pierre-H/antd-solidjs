import { HeartTwoTone as BaseHeartTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HeartTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHeartTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-heart-two-tone text-xl"
            role="img"
            aria-label="heart-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};