import { ApiOutlined as BaseApiOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ApiOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseApiOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-api-outlined text-xl"
            role="img"
            aria-label="api-outlined"
            innerHTML={svgHTMLString}
        />
    );
};