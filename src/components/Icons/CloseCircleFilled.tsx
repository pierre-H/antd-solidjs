import { CloseCircleFilled as BaseCloseCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloseCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloseCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-close-circle-filled text-xl"
            role="img"
            aria-label="close-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};