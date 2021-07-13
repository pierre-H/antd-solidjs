import { CloudDownloadOutlined as BaseCloudDownloadOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloudDownloadOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloudDownloadOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-cloud-download-outlined text-xl"
            role="img"
            aria-label="cloud-download-outlined"
            innerHTML={svgHTMLString}
        />
    );
};