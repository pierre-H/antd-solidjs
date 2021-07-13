import { UploadOutlined as BaseUploadOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UploadOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUploadOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-upload-outlined text-xl"
            role="img"
            aria-label="upload-outlined"
            innerHTML={svgHTMLString}
        />
    );
};