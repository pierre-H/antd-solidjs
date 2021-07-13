import { SecurityScanOutlined as BaseSecurityScanOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SecurityScanOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSecurityScanOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-security-scan-outlined text-xl"
            role="img"
            aria-label="security-scan-outlined"
            innerHTML={svgHTMLString}
        />
    );
};