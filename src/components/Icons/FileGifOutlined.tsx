import { FileGifOutlined as BaseFileGifOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileGifOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileGifOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-gif-outlined text-xl"
            role="img"
            aria-label="file-gif-outlined"
            innerHTML={svgHTMLString}
        />
    );
};