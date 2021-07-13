import { GlobalOutlined as BaseGlobalOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GlobalOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGlobalOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-global-outlined text-xl"
            role="img"
            aria-label="global-outlined"
            innerHTML={svgHTMLString}
        />
    );
};