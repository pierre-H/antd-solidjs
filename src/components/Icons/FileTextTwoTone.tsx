import { FileTextTwoTone as BaseFileTextTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileTextTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileTextTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-text-two-tone text-xl"
            role="img"
            aria-label="file-text-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};