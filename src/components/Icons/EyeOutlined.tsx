import { EyeOutlined as BaseEyeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EyeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEyeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-eye-outlined text-xl"
            role="img"
            aria-label="eye-outlined"
            innerHTML={svgHTMLString}
        />
    );
};