import { FileWordOutlined as BaseFileWordOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileWordOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileWordOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-word-outlined text-xl"
            role="img"
            aria-label="file-word-outlined"
            innerHTML={svgHTMLString}
        />
    );
};