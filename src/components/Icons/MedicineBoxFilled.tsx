import { MedicineBoxFilled as BaseMedicineBoxFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MedicineBoxFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMedicineBoxFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-medicine-box-filled text-xl"
            role="img"
            aria-label="medicine-box-filled"
            innerHTML={svgHTMLString}
        />
    );
};