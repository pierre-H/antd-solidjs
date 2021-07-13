import { UsbFilled as BaseUsbFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UsbFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUsbFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-usb-filled text-xl"
            role="img"
            aria-label="usb-filled"
            innerHTML={svgHTMLString}
        />
    );
};