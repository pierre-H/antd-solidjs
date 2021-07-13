import { AuditOutlined as BaseAuditOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AuditOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAuditOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-audit-outlined text-xl"
            role="img"
            aria-label="audit-outlined"
            innerHTML={svgHTMLString}
        />
    );
};