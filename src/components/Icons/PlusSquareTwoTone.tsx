import { PlusSquareTwoTone as BasePlusSquareTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PlusSquareTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePlusSquareTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-plus-square-two-tone text-xl"
            role="img"
            aria-label="plus-square-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};