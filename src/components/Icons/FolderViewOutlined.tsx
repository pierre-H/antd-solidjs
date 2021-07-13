import { FolderViewOutlined as BaseFolderViewOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FolderViewOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFolderViewOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-folder-view-outlined text-xl"
            role="img"
            aria-label="folder-view-outlined"
            innerHTML={svgHTMLString}
        />
    );
};