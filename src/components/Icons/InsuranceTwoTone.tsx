import { InsuranceTwoTone as BaseInsuranceTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InsuranceTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInsuranceTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-insurance-two-tone text-xl"
            role="img"
            aria-label="insurance-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};