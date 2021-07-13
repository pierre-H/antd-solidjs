import { EyeInvisibleOutlined as BaseEyeInvisibleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EyeInvisibleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEyeInvisibleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-eye-invisible-outlined text-xl"
            role="img"
            aria-label="eye-invisible-outlined"
            innerHTML={svgHTMLString}
        />
    );
};