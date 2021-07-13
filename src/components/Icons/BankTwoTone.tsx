import { BankTwoTone as BaseBankTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BankTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBankTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bank-two-tone text-xl"
            role="img"
            aria-label="bank-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};