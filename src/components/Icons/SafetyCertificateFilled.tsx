import { SafetyCertificateFilled as BaseSafetyCertificateFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SafetyCertificateFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSafetyCertificateFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-safety-certificate-filled text-xl"
            role="img"
            aria-label="safety-certificate-filled"
            innerHTML={svgHTMLString}
        />
    );
};