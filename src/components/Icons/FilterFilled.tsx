import { FilterFilled as BaseFilterFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FilterFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFilterFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-filter-filled text-xl"
            role="img"
            aria-label="filter-filled"
            innerHTML={svgHTMLString}
        />
    );
};