import { SortDescendingOutlined as BaseSortDescendingOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SortDescendingOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSortDescendingOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-sort-descending-outlined text-xl"
            role="img"
            aria-label="sort-descending-outlined"
            innerHTML={svgHTMLString}
        />
    );
};