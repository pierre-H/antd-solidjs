import { CheckSquareTwoTone as BaseCheckSquareTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CheckSquareTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCheckSquareTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-check-square-two-tone text-xl"
            role="img"
            aria-label="check-square-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};