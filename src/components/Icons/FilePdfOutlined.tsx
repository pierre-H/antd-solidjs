import { FilePdfOutlined as BaseFilePdfOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FilePdfOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFilePdfOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-pdf-outlined text-xl"
            role="img"
            aria-label="file-pdf-outlined"
            innerHTML={svgHTMLString}
        />
    );
};