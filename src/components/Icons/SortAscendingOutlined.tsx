import { SortAscendingOutlined as BaseSortAscendingOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SortAscendingOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSortAscendingOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-sort-ascending-outlined text-xl"
            role="img"
            aria-label="sort-ascending-outlined"
            innerHTML={svgHTMLString}
        />
    );
};