import { InsertRowLeftOutlined as BaseInsertRowLeftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InsertRowLeftOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInsertRowLeftOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-insert-row-left-outlined text-xl"
            role="img"
            aria-label="insert-row-left-outlined"
            innerHTML={svgHTMLString}
        />
    );
};