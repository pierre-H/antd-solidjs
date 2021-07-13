import { EyeFilled as BaseEyeFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EyeFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEyeFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-eye-filled text-xl"
            role="img"
            aria-label="eye-filled"
            innerHTML={svgHTMLString}
        />
    );
};