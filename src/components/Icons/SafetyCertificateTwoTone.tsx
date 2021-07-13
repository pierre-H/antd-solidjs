import { SafetyCertificateTwoTone as BaseSafetyCertificateTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SafetyCertificateTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSafetyCertificateTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-safety-certificate-two-tone text-xl"
            role="img"
            aria-label="safety-certificate-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};