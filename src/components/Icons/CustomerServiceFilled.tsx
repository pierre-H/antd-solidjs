import { CustomerServiceFilled as BaseCustomerServiceFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CustomerServiceFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCustomerServiceFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-customer-service-filled text-xl"
            role="img"
            aria-label="customer-service-filled"
            innerHTML={svgHTMLString}
        />
    );
};