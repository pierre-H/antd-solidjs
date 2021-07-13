import { FileZipTwoTone as BaseFileZipTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileZipTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileZipTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-zip-two-tone text-xl"
            role="img"
            aria-label="file-zip-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};