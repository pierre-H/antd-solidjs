import { AlertFilled as BaseAlertFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AlertFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAlertFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-alert-filled text-xl"
            role="img"
            aria-label="alert-filled"
            innerHTML={svgHTMLString}
        />
    );
};