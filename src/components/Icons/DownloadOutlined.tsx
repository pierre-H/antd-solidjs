import { DownloadOutlined as BaseDownloadOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DownloadOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDownloadOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-download-outlined text-xl"
            role="img"
            aria-label="download-outlined"
            innerHTML={svgHTMLString}
        />
    );
};