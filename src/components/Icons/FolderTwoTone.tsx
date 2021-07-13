import { FolderTwoTone as BaseFolderTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FolderTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFolderTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-folder-two-tone text-xl"
            role="img"
            aria-label="folder-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};