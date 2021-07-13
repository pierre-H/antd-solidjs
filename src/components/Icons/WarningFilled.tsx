import { WarningFilled as BaseWarningFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const WarningFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseWarningFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-warning-filled text-xl"
            role="img"
            aria-label="warning-filled"
            innerHTML={svgHTMLString}
        />
    );
};