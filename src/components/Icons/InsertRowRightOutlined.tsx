import { InsertRowRightOutlined as BaseInsertRowRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InsertRowRightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInsertRowRightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-insert-row-right-outlined text-xl"
            role="img"
            aria-label="insert-row-right-outlined"
            innerHTML={svgHTMLString}
        />
    );
};