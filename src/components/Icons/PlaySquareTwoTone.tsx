import { PlaySquareTwoTone as BasePlaySquareTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PlaySquareTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePlaySquareTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-play-square-two-tone text-xl"
            role="img"
            aria-label="play-square-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};