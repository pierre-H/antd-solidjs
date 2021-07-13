import { CaretRightFilled as BaseCaretRightFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CaretRightFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCaretRightFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-caret-right-filled text-xl"
            role="img"
            aria-label="caret-right-filled"
            innerHTML={svgHTMLString}
        />
    );
};