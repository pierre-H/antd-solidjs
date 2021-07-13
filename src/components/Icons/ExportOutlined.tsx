import { ExportOutlined as BaseExportOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ExportOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseExportOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-export-outlined text-xl"
            role="img"
            aria-label="export-outlined"
            innerHTML={svgHTMLString}
        />
    );
};