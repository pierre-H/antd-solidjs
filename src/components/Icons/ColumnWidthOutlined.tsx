import { ColumnWidthOutlined as BaseColumnWidthOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ColumnWidthOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseColumnWidthOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-column-width-outlined text-xl"
            role="img"
            aria-label="column-width-outlined"
            innerHTML={svgHTMLString}
        />
    );
};