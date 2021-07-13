import { VideoCameraAddOutlined as BaseVideoCameraAddOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const VideoCameraAddOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseVideoCameraAddOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-video-camera-add-outlined text-xl"
            role="img"
            aria-label="video-camera-add-outlined"
            innerHTML={svgHTMLString}
        />
    );
};