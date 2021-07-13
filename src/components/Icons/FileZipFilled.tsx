import { FileZipFilled as BaseFileZipFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileZipFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileZipFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-zip-filled text-xl"
            role="img"
            aria-label="file-zip-filled"
            innerHTML={svgHTMLString}
        />
    );
};