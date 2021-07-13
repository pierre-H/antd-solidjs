import { BarcodeOutlined as BaseBarcodeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BarcodeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBarcodeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-barcode-outlined text-xl"
            role="img"
            aria-label="barcode-outlined"
            innerHTML={svgHTMLString}
        />
    );
};