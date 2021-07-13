import { FlagTwoTone as BaseFlagTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FlagTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFlagTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-flag-two-tone text-xl"
            role="img"
            aria-label="flag-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};