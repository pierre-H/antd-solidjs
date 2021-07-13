import { UsbOutlined as BaseUsbOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UsbOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUsbOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-usb-outlined text-xl"
            role="img"
            aria-label="usb-outlined"
            innerHTML={svgHTMLString}
        />
    );
};