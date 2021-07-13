import { FileImageTwoTone as BaseFileImageTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileImageTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileImageTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-image-two-tone text-xl"
            role="img"
            aria-label="file-image-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};