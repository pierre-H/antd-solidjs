import { FileMarkdownOutlined as BaseFileMarkdownOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileMarkdownOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileMarkdownOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-markdown-outlined text-xl"
            role="img"
            aria-label="file-markdown-outlined"
            innerHTML={svgHTMLString}
        />
    );
};