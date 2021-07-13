import { FileExclamationOutlined as BaseFileExclamationOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileExclamationOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileExclamationOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-exclamation-outlined text-xl"
            role="img"
            aria-label="file-exclamation-outlined"
            innerHTML={svgHTMLString}
        />
    );
};