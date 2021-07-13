import { CustomerServiceOutlined as BaseCustomerServiceOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CustomerServiceOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCustomerServiceOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-customer-service-outlined text-xl"
            role="img"
            aria-label="customer-service-outlined"
            innerHTML={svgHTMLString}
        />
    );
};