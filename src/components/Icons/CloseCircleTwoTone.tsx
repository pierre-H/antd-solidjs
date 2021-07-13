import { CloseCircleTwoTone as BaseCloseCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloseCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloseCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-close-circle-two-tone text-xl"
            role="img"
            aria-label="close-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};