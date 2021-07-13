import { VideoCameraFilled as BaseVideoCameraFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const VideoCameraFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseVideoCameraFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-video-camera-filled text-xl"
            role="img"
            aria-label="video-camera-filled"
            innerHTML={svgHTMLString}
        />
    );
};