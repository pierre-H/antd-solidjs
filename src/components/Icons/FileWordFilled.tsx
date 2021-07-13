import { FileWordFilled as BaseFileWordFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileWordFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileWordFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-word-filled text-xl"
            role="img"
            aria-label="file-word-filled"
            innerHTML={svgHTMLString}
        />
    );
};