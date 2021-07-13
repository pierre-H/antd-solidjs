import { ToTopOutlined as BaseToTopOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ToTopOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseToTopOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-to-top-outlined text-xl"
            role="img"
            aria-label="to-top-outlined"
            innerHTML={svgHTMLString}
        />
    );
};