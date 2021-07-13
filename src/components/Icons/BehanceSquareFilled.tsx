import { BehanceSquareFilled as BaseBehanceSquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BehanceSquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBehanceSquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-behance-square-filled text-xl"
            role="img"
            aria-label="behance-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};