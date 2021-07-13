import { PhoneTwoTone as BasePhoneTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PhoneTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePhoneTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-phone-two-tone text-xl"
            role="img"
            aria-label="phone-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};