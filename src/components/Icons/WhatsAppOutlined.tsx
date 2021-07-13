import { WhatsAppOutlined as BaseWhatsAppOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WhatsAppOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWhatsAppOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-whats-app-outlined text-xl"
            role="img"
            aria-label="whats-app-outlined"
            innerHTML={svgHTMLString}
        />
    );
};