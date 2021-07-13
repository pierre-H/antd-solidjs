import { FrownTwoTone as BaseFrownTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FrownTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFrownTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-frown-two-tone text-xl"
            role="img"
            aria-label="frown-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};