import { FileWordTwoTone as BaseFileWordTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileWordTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileWordTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-word-two-tone text-xl"
            role="img"
            aria-label="file-word-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};