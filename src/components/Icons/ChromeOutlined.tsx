import { ChromeOutlined as BaseChromeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ChromeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseChromeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-chrome-outlined text-xl"
            role="img"
            aria-label="chrome-outlined"
            innerHTML={svgHTMLString}
        />
    );
};