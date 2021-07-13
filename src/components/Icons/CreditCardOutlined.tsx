import { CreditCardOutlined as BaseCreditCardOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CreditCardOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCreditCardOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-credit-card-outlined text-xl"
            role="img"
            aria-label="credit-card-outlined"
            innerHTML={svgHTMLString}
        />
    );
};