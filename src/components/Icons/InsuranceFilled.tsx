import { InsuranceFilled as BaseInsuranceFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InsuranceFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInsuranceFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-insurance-filled text-xl"
            role="img"
            aria-label="insurance-filled"
            innerHTML={svgHTMLString}
        />
    );
};