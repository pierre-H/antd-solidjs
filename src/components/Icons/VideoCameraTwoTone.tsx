import { VideoCameraTwoTone as BaseVideoCameraTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const VideoCameraTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseVideoCameraTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-video-camera-two-tone text-xl"
            role="img"
            aria-label="video-camera-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};