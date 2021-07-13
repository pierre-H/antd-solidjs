import { FolderOpenFilled as BaseFolderOpenFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FolderOpenFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFolderOpenFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-folder-open-filled text-xl"
            role="img"
            aria-label="folder-open-filled"
            innerHTML={svgHTMLString}
        />
    );
};