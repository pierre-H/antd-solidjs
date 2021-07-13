import { FilePdfFilled as BaseFilePdfFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FilePdfFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFilePdfFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-pdf-filled text-xl"
            role="img"
            aria-label="file-pdf-filled"
            innerHTML={svgHTMLString}
        />
    );
};