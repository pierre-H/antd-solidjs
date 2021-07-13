import { PlusCircleFilled as BasePlusCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PlusCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePlusCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-plus-circle-filled text-xl"
            role="img"
            aria-label="plus-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};