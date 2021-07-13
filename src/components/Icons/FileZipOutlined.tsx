import { FileZipOutlined as BaseFileZipOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileZipOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileZipOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-zip-outlined text-xl"
            role="img"
            aria-label="file-zip-outlined"
            innerHTML={svgHTMLString}
        />
    );
};