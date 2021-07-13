import { CloudUploadOutlined as BaseCloudUploadOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloudUploadOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloudUploadOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-cloud-upload-outlined text-xl"
            role="img"
            aria-label="cloud-upload-outlined"
            innerHTML={svgHTMLString}
        />
    );
};