import { FolderOpenOutlined as BaseFolderOpenOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FolderOpenOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFolderOpenOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-folder-open-outlined text-xl"
            role="img"
            aria-label="folder-open-outlined"
            innerHTML={svgHTMLString}
        />
    );
};