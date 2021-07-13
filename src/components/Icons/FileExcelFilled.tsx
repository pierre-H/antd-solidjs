import { FileExcelFilled as BaseFileExcelFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileExcelFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileExcelFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-excel-filled text-xl"
            role="img"
            aria-label="file-excel-filled"
            innerHTML={svgHTMLString}
        />
    );
};