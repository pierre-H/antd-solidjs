import { CrownFilled as BaseCrownFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CrownFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCrownFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-crown-filled text-xl"
            role="img"
            aria-label="crown-filled"
            innerHTML={svgHTMLString}
        />
    );
};