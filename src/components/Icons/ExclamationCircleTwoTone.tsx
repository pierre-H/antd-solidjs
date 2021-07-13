import { ExclamationCircleTwoTone as BaseExclamationCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ExclamationCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseExclamationCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-exclamation-circle-two-tone text-xl"
            role="img"
            aria-label="exclamation-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};