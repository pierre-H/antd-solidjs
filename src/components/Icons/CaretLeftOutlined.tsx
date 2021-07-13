import { CaretLeftOutlined as BaseCaretLeftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CaretLeftOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCaretLeftOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-caret-left-outlined text-xl"
            role="img"
            aria-label="caret-left-outlined"
            innerHTML={svgHTMLString}
        />
    );
};