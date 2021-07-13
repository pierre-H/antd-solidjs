import { PlayCircleTwoTone as BasePlayCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PlayCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePlayCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-play-circle-two-tone text-xl"
            role="img"
            aria-label="play-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};