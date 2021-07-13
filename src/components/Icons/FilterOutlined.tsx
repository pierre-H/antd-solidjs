import { FilterOutlined as BaseFilterOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FilterOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFilterOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-filter-outlined text-xl"
            role="img"
            aria-label="filter-outlined"
            innerHTML={svgHTMLString}
        />
    );
};