import { FileExcelOutlined as BaseFileExcelOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileExcelOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileExcelOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-excel-outlined text-xl"
            role="img"
            aria-label="file-excel-outlined"
            innerHTML={svgHTMLString}
        />
    );
};