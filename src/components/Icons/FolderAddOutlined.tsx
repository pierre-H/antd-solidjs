import { FolderAddOutlined as BaseFolderAddOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FolderAddOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFolderAddOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-folder-add-outlined text-xl"
            role="img"
            aria-label="folder-add-outlined"
            innerHTML={svgHTMLString}
        />
    );
};