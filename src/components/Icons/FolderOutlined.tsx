import { FolderOutlined as BaseFolderOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FolderOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFolderOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-folder-outlined text-xl"
            role="img"
            aria-label="folder-outlined"
            innerHTML={svgHTMLString}
        />
    );
};