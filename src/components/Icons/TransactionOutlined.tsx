import { TransactionOutlined as BaseTransactionOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TransactionOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTransactionOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-transaction-outlined text-xl"
            role="img"
            aria-label="transaction-outlined"
            innerHTML={svgHTMLString}
        />
    );
};