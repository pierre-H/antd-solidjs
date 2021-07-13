import { SwitcherOutlined as BaseSwitcherOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SwitcherOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSwitcherOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-switcher-outlined text-xl"
            role="img"
            aria-label="switcher-outlined"
            innerHTML={svgHTMLString}
        />
    );
};