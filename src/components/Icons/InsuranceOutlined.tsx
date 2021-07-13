import { InsuranceOutlined as BaseInsuranceOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InsuranceOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInsuranceOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-insurance-outlined text-xl"
            role="img"
            aria-label="insurance-outlined"
            innerHTML={svgHTMLString}
        />
    );
};