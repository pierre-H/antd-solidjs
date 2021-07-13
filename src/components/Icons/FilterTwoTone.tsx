import { FilterTwoTone as BaseFilterTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FilterTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFilterTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-filter-two-tone text-xl"
            role="img"
            aria-label="filter-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};