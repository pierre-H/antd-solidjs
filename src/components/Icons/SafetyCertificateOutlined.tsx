import { SafetyCertificateOutlined as BaseSafetyCertificateOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SafetyCertificateOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSafetyCertificateOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-safety-certificate-outlined text-xl"
            role="img"
            aria-label="safety-certificate-outlined"
            innerHTML={svgHTMLString}
        />
    );
};