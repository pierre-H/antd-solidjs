import { PlayCircleOutlined as BasePlayCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PlayCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePlayCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-play-circle-outlined text-xl"
            role="img"
            aria-label="play-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};