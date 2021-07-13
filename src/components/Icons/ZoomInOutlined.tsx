import { ZoomInOutlined as BaseZoomInOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ZoomInOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseZoomInOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-zoom-in-outlined text-xl"
            role="img"
            aria-label="zoom-in-outlined"
            innerHTML={svgHTMLString}
        />
    );
};