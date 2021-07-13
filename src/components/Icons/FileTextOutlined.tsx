import { FileTextOutlined as BaseFileTextOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileTextOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileTextOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-text-outlined text-xl"
            role="img"
            aria-label="file-text-outlined"
            innerHTML={svgHTMLString}
        />
    );
};