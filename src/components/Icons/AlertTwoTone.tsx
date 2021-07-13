import { AlertTwoTone as BaseAlertTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AlertTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAlertTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-alert-two-tone text-xl"
            role="img"
            aria-label="alert-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};