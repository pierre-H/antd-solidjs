import { CustomerServiceTwoTone as BaseCustomerServiceTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CustomerServiceTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCustomerServiceTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-customer-service-two-tone text-xl"
            role="img"
            aria-label="customer-service-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};