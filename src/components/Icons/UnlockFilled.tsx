import { UnlockFilled as BaseUnlockFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const UnlockFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseUnlockFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-unlock-filled text-xl"
            role="img"
            aria-label="unlock-filled"
            innerHTML={svgHTMLString}
        />
    );
};