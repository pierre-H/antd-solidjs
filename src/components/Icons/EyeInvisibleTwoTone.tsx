import { EyeInvisibleTwoTone as BaseEyeInvisibleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EyeInvisibleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEyeInvisibleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-eye-invisible-two-tone text-xl"
            role="img"
            aria-label="eye-invisible-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};