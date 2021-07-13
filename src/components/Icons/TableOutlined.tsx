import { TableOutlined as BaseTableOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TableOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTableOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-table-outlined text-xl"
            role="img"
            aria-label="table-outlined"
            innerHTML={svgHTMLString}
        />
    );
};