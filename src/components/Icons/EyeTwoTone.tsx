import { EyeTwoTone as BaseEyeTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EyeTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEyeTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-eye-two-tone text-xl"
            role="img"
            aria-label="eye-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};