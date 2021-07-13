import { CaretRightOutlined as BaseCaretRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CaretRightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCaretRightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-caret-right-outlined text-xl"
            role="img"
            aria-label="caret-right-outlined"
            innerHTML={svgHTMLString}
        />
    );
};