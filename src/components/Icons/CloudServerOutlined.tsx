import { CloudServerOutlined as BaseCloudServerOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloudServerOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloudServerOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-cloud-server-outlined text-xl"
            role="img"
            aria-label="cloud-server-outlined"
            innerHTML={svgHTMLString}
        />
    );
};