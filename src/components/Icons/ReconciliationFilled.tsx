import { ReconciliationFilled as BaseReconciliationFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ReconciliationFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseReconciliationFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-reconciliation-filled text-xl"
            role="img"
            aria-label="reconciliation-filled"
            innerHTML={svgHTMLString}
        />
    );
};