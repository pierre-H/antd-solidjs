import { PhoneOutlined as BasePhoneOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PhoneOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePhoneOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-phone-outlined text-xl"
            role="img"
            aria-label="phone-outlined"
            innerHTML={svgHTMLString}
        />
    );
};