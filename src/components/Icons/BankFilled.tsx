import { BankFilled as BaseBankFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BankFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBankFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bank-filled text-xl"
            role="img"
            aria-label="bank-filled"
            innerHTML={svgHTMLString}
        />
    );
};