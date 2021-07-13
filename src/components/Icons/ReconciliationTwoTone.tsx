import { ReconciliationTwoTone as BaseReconciliationTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ReconciliationTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseReconciliationTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-reconciliation-two-tone text-xl"
            role="img"
            aria-label="reconciliation-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};