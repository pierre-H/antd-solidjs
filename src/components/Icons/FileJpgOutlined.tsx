import { FileJpgOutlined as BaseFileJpgOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileJpgOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileJpgOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-jpg-outlined text-xl"
            role="img"
            aria-label="file-jpg-outlined"
            innerHTML={svgHTMLString}
        />
    );
};