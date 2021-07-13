import { FlagFilled as BaseFlagFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FlagFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFlagFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-flag-filled text-xl"
            role="img"
            aria-label="flag-filled"
            innerHTML={svgHTMLString}
        />
    );
};