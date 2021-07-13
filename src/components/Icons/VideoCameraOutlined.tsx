import { VideoCameraOutlined as BaseVideoCameraOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const VideoCameraOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseVideoCameraOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-video-camera-outlined text-xl"
            role="img"
            aria-label="video-camera-outlined"
            innerHTML={svgHTMLString}
        />
    );
};