import { SecurityScanTwoTone as BaseSecurityScanTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SecurityScanTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSecurityScanTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-security-scan-two-tone text-xl"
            role="img"
            aria-label="security-scan-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};