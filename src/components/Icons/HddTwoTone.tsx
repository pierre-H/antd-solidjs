import { HddTwoTone as BaseHddTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const HddTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseHddTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-hdd-two-tone text-xl"
            role="img"
            aria-label="hdd-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};