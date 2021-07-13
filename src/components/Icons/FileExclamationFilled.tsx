import { FileExclamationFilled as BaseFileExclamationFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileExclamationFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileExclamationFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-exclamation-filled text-xl"
            role="img"
            aria-label="file-exclamation-filled"
            innerHTML={svgHTMLString}
        />
    );
};