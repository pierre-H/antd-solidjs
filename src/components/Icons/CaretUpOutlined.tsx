import { CaretUpOutlined as BaseCaretUpOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CaretUpOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCaretUpOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-caret-up-outlined text-xl"
            role="img"
            aria-label="caret-up-outlined"
            innerHTML={svgHTMLString}
        />
    );
};