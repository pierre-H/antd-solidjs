import { ColumnHeightOutlined as BaseColumnHeightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ColumnHeightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseColumnHeightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-column-height-outlined text-xl"
            role="img"
            aria-label="column-height-outlined"
            innerHTML={svgHTMLString}
        />
    );
};