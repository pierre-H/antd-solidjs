import { FileImageFilled as BaseFileImageFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileImageFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileImageFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-image-filled text-xl"
            role="img"
            aria-label="file-image-filled"
            innerHTML={svgHTMLString}
        />
    );
};