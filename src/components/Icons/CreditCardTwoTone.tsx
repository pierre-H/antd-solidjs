import { CreditCardTwoTone as BaseCreditCardTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CreditCardTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCreditCardTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-credit-card-two-tone text-xl"
            role="img"
            aria-label="credit-card-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};