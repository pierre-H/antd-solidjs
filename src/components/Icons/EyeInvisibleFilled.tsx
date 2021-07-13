import { EyeInvisibleFilled as BaseEyeInvisibleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EyeInvisibleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEyeInvisibleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-eye-invisible-filled text-xl"
            role="img"
            aria-label="eye-invisible-filled"
            innerHTML={svgHTMLString}
        />
    );
};