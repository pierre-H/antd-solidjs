import { LockFilled as BaseLockFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LockFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLockFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-lock-filled text-xl"
            role="img"
            aria-label="lock-filled"
            innerHTML={svgHTMLString}
        />
    );
};