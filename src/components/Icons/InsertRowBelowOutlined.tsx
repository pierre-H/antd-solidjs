import { InsertRowBelowOutlined as BaseInsertRowBelowOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InsertRowBelowOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInsertRowBelowOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-insert-row-below-outlined text-xl"
            role="img"
            aria-label="insert-row-below-outlined"
            innerHTML={svgHTMLString}
        />
    );
};