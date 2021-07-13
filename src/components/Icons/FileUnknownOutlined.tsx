import { FileUnknownOutlined as BaseFileUnknownOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FileUnknownOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFileUnknownOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-file-unknown-outlined text-xl"
            role="img"
            aria-label="file-unknown-outlined"
            innerHTML={svgHTMLString}
        />
    );
};