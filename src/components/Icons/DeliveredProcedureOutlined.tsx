import { DeliveredProcedureOutlined as BaseDeliveredProcedureOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DeliveredProcedureOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDeliveredProcedureOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-delivered-procedure-outlined text-xl"
            role="img"
            aria-label="delivered-procedure-outlined"
            innerHTML={svgHTMLString}
        />
    );
};