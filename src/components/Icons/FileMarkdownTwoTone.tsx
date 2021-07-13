import { FileMarkdownTwoTone as BaseFileMarkdownTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileMarkdownTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileMarkdownTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-markdown-two-tone text-xl"
            role="img"
            aria-label="file-markdown-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};