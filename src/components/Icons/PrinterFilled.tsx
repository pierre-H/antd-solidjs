import { PrinterFilled as BasePrinterFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PrinterFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePrinterFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-printer-filled text-xl"
            role="img"
            aria-label="printer-filled"
            innerHTML={svgHTMLString}
        />
    );
};