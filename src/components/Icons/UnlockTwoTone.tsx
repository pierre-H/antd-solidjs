import { UnlockTwoTone as BaseUnlockTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UnlockTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUnlockTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-unlock-two-tone text-xl"
            role="img"
            aria-label="unlock-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};