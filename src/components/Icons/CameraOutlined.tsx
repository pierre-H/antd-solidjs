import { CameraOutlined as BaseCameraOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CameraOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCameraOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-camera-outlined text-xl"
            role="img"
            aria-label="camera-outlined"
            innerHTML={svgHTMLString}
        />
    );
};