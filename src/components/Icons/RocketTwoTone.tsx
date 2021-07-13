import { RocketTwoTone as BaseRocketTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RocketTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRocketTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-rocket-two-tone text-xl"
            role="img"
            aria-label="rocket-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};