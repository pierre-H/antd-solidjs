import { PropertySafetyOutlined as BasePropertySafetyOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PropertySafetyOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePropertySafetyOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-property-safety-outlined text-xl"
            role="img"
            aria-label="property-safety-outlined"
            innerHTML={svgHTMLString}
        />
    );
};