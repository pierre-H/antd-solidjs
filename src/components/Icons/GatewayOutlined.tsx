import { GatewayOutlined as BaseGatewayOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GatewayOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGatewayOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-gateway-outlined text-xl"
            role="img"
            aria-label="gateway-outlined"
            innerHTML={svgHTMLString}
        />
    );
};