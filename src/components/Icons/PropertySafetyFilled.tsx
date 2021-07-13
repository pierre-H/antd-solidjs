import { PropertySafetyFilled as BasePropertySafetyFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PropertySafetyFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePropertySafetyFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-property-safety-filled text-xl"
            role="img"
            aria-label="property-safety-filled"
            innerHTML={svgHTMLString}
        />
    );
};