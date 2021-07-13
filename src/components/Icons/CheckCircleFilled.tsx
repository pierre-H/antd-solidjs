import { CheckCircleFilled as BaseCheckCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CheckCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCheckCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-check-circle-filled text-xl"
            role="img"
            aria-label="check-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};