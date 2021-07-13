import { FileImageOutlined as BaseFileImageOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileImageOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileImageOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-image-outlined text-xl"
            role="img"
            aria-label="file-image-outlined"
            innerHTML={svgHTMLString}
        />
    );
};