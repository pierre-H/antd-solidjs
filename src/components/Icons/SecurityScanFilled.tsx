import { SecurityScanFilled as BaseSecurityScanFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SecurityScanFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSecurityScanFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-security-scan-filled text-xl"
            role="img"
            aria-label="security-scan-filled"
            innerHTML={svgHTMLString}
        />
    );
};