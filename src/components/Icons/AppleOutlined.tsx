import { AppleOutlined as BaseAppleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AppleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAppleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-apple-outlined text-xl"
            role="img"
            aria-label="apple-outlined"
            innerHTML={svgHTMLString}
        />
    );
};