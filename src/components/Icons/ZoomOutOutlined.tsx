import { ZoomOutOutlined as BaseZoomOutOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ZoomOutOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseZoomOutOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-zoom-out-outlined text-xl"
            role="img"
            aria-label="zoom-out-outlined"
            innerHTML={svgHTMLString}
        />
    );
};