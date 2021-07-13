import { WifiOutlined as BaseWifiOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WifiOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWifiOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-wifi-outlined text-xl"
            role="img"
            aria-label="wifi-outlined"
            innerHTML={svgHTMLString}
        />
    );
};