import { FileExcelTwoTone as BaseFileExcelTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileExcelTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileExcelTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-excel-two-tone text-xl"
            role="img"
            aria-label="file-excel-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};