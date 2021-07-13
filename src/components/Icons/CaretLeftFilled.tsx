import { CaretLeftFilled as BaseCaretLeftFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CaretLeftFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCaretLeftFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-caret-left-filled text-xl"
            role="img"
            aria-label="caret-left-filled"
            innerHTML={svgHTMLString}
        />
    );
};