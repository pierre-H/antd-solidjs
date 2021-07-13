import { ReconciliationOutlined as BaseReconciliationOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ReconciliationOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseReconciliationOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-reconciliation-outlined text-xl"
            role="img"
            aria-label="reconciliation-outlined"
            innerHTML={svgHTMLString}
        />
    );
};