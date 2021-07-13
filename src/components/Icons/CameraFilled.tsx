import { CameraFilled as BaseCameraFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CameraFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCameraFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-camera-filled text-xl"
            role="img"
            aria-label="camera-filled"
            innerHTML={svgHTMLString}
        />
    );
};