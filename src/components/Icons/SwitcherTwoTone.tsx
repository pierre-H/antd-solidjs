import { SwitcherTwoTone as BaseSwitcherTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SwitcherTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSwitcherTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-switcher-two-tone text-xl"
            role="img"
            aria-label="switcher-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};