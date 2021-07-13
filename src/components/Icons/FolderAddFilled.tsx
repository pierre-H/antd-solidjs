import { FolderAddFilled as BaseFolderAddFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FolderAddFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFolderAddFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-folder-add-filled text-xl"
            role="img"
            aria-label="folder-add-filled"
            innerHTML={svgHTMLString}
        />
    );
};