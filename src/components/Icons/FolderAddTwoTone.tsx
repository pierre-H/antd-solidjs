import { FolderAddTwoTone as BaseFolderAddTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FolderAddTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFolderAddTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-folder-add-two-tone text-xl"
            role="img"
            aria-label="folder-add-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};