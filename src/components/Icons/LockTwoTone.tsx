import { LockTwoTone as BaseLockTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LockTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLockTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-lock-two-tone text-xl"
            role="img"
            aria-label="lock-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};