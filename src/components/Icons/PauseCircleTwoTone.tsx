import { PauseCircleTwoTone as BasePauseCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PauseCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePauseCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pause-circle-two-tone text-xl"
            role="img"
            aria-label="pause-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};