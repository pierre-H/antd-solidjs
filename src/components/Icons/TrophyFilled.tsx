import { TrophyFilled as BaseTrophyFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TrophyFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTrophyFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-trophy-filled text-xl"
            role="img"
            aria-label="trophy-filled"
            innerHTML={svgHTMLString}
        />
    );
};