import { SkypeOutlined as BaseSkypeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SkypeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSkypeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-skype-outlined text-xl"
            role="img"
            aria-label="skype-outlined"
            innerHTML={svgHTMLString}
        />
    );
};