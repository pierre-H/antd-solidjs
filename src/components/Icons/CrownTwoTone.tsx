import { CrownTwoTone as BaseCrownTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CrownTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCrownTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-crown-two-tone text-xl"
            role="img"
            aria-label="crown-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};