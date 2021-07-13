import { PropertySafetyTwoTone as BasePropertySafetyTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PropertySafetyTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePropertySafetyTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-property-safety-two-tone text-xl"
            role="img"
            aria-label="property-safety-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};