import { FallOutlined as BaseFallOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FallOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFallOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fall-outlined text-xl"
            role="img"
            aria-label="fall-outlined"
            innerHTML={svgHTMLString}
        />
    );
};