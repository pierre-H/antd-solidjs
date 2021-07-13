import { SwitcherFilled as BaseSwitcherFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SwitcherFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSwitcherFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-switcher-filled text-xl"
            role="img"
            aria-label="switcher-filled"
            innerHTML={svgHTMLString}
        />
    );
};