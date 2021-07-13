import { TrophyTwoTone as BaseTrophyTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TrophyTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTrophyTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-trophy-two-tone text-xl"
            role="img"
            aria-label="trophy-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};