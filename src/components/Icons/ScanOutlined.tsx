import { ScanOutlined as BaseScanOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ScanOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseScanOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-scan-outlined text-xl"
            role="img"
            aria-label="scan-outlined"
            innerHTML={svgHTMLString}
        />
    );
};