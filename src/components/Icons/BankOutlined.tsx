import { BankOutlined as BaseBankOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BankOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBankOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bank-outlined text-xl"
            role="img"
            aria-label="bank-outlined"
            innerHTML={svgHTMLString}
        />
    );
};