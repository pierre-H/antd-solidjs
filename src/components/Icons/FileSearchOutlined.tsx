import { FileSearchOutlined as BaseFileSearchOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileSearchOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileSearchOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-search-outlined text-xl"
            role="img"
            aria-label="file-search-outlined"
            innerHTML={svgHTMLString}
        />
    );
};