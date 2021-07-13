import { PayCircleFilled as BasePayCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PayCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePayCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pay-circle-filled text-xl"
            role="img"
            aria-label="pay-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};