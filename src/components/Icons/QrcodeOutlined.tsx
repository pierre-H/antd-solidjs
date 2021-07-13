import { QrcodeOutlined as BaseQrcodeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const QrcodeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseQrcodeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-qrcode-outlined text-xl"
            role="img"
            aria-label="qrcode-outlined"
            innerHTML={svgHTMLString}
        />
    );
};