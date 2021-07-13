import { PauseCircleFilled as BasePauseCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PauseCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePauseCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pause-circle-filled text-xl"
            role="img"
            aria-label="pause-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};