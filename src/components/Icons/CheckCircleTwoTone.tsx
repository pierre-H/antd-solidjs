import { CheckCircleTwoTone as BaseCheckCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CheckCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCheckCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-check-circle-two-tone text-xl"
            role="img"
            aria-label="check-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};