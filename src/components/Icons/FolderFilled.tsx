import { FolderFilled as BaseFolderFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FolderFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFolderFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-folder-filled text-xl"
            role="img"
            aria-label="folder-filled"
            innerHTML={svgHTMLString}
        />
    );
};