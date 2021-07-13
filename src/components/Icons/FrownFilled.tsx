import { FrownFilled as BaseFrownFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FrownFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFrownFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-frown-filled text-xl"
            role="img"
            aria-label="frown-filled"
            innerHTML={svgHTMLString}
        />
    );
};