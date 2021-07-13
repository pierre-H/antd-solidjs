import { SearchOutlined as BaseSearchOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SearchOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSearchOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-search-outlined text-xl"
            role="img"
            aria-label="search-outlined"
            innerHTML={svgHTMLString}
        />
    );
};