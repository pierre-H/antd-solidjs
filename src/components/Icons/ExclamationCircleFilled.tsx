import { ExclamationCircleFilled as BaseExclamationCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ExclamationCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseExclamationCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-exclamation-circle-filled text-xl"
            role="img"
            aria-label="exclamation-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};