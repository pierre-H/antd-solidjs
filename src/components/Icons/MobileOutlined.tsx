import { MobileOutlined as BaseMobileOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MobileOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMobileOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-mobile-outlined text-xl"
            role="img"
            aria-label="mobile-outlined"
            innerHTML={svgHTMLString}
        />
    );
};