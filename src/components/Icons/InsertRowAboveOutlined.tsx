import { InsertRowAboveOutlined as BaseInsertRowAboveOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InsertRowAboveOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInsertRowAboveOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-insert-row-above-outlined text-xl"
            role="img"
            aria-label="insert-row-above-outlined"
            innerHTML={svgHTMLString}
        />
    );
};