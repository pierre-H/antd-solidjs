import { CameraTwoTone as BaseCameraTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CameraTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCameraTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-camera-two-tone text-xl"
            role="img"
            aria-label="camera-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};