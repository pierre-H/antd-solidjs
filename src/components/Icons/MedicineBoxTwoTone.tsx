import { MedicineBoxTwoTone as BaseMedicineBoxTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MedicineBoxTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMedicineBoxTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-medicine-box-two-tone text-xl"
            role="img"
            aria-label="medicine-box-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};