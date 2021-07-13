import { FileMarkdownFilled as BaseFileMarkdownFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileMarkdownFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileMarkdownFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-markdown-filled text-xl"
            role="img"
            aria-label="file-markdown-filled"
            innerHTML={svgHTMLString}
        />
    );
};