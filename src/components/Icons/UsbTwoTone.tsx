import { UsbTwoTone as BaseUsbTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UsbTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUsbTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-usb-two-tone text-xl"
            role="img"
            aria-label="usb-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};