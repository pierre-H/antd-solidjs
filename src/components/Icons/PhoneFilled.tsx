import { PhoneFilled as BasePhoneFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PhoneFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePhoneFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-phone-filled text-xl"
            role="img"
            aria-label="phone-filled"
            innerHTML={svgHTMLString}
        />
    );
};