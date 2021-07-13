import { FilePdfTwoTone as BaseFilePdfTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FilePdfTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFilePdfTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-pdf-two-tone text-xl"
            role="img"
            aria-label="file-pdf-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};