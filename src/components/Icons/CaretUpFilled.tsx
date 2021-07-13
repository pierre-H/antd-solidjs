import { CaretUpFilled as BaseCaretUpFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CaretUpFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCaretUpFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-caret-up-filled text-xl"
            role="img"
            aria-label="caret-up-filled"
            innerHTML={svgHTMLString}
        />
    );
};