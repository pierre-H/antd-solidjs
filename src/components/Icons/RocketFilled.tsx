import { RocketFilled as BaseRocketFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RocketFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRocketFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-rocket-filled text-xl"
            role="img"
            aria-label="rocket-filled"
            innerHTML={svgHTMLString}
        />
    );
};