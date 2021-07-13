import { PlusCircleTwoTone as BasePlusCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PlusCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePlusCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-plus-circle-two-tone text-xl"
            role="img"
            aria-label="plus-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};