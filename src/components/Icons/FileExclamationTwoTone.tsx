import { FileExclamationTwoTone as BaseFileExclamationTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileExclamationTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileExclamationTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-exclamation-two-tone text-xl"
            role="img"
            aria-label="file-exclamation-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};