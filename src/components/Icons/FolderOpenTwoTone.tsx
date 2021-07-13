import { FolderOpenTwoTone as BaseFolderOpenTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FolderOpenTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFolderOpenTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-folder-open-two-tone text-xl"
            role="img"
            aria-label="folder-open-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};