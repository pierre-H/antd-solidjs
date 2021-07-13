import { LayoutOutlined as BaseLayoutOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LayoutOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLayoutOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-layout-outlined text-xl"
            role="img"
            aria-label="layout-outlined"
            innerHTML={svgHTMLString}
        />
    );
};