import { PrinterTwoTone as BasePrinterTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PrinterTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePrinterTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-printer-two-tone text-xl"
            role="img"
            aria-label="printer-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};