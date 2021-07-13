import { PlayCircleFilled as BasePlayCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PlayCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePlayCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-play-circle-filled text-xl"
            role="img"
            aria-label="play-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};