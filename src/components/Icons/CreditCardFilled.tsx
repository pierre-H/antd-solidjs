import { CreditCardFilled as BaseCreditCardFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CreditCardFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCreditCardFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-credit-card-filled text-xl"
            role="img"
            aria-label="credit-card-filled"
            innerHTML={svgHTMLString}
        />
    );
};