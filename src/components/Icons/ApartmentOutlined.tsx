import { ApartmentOutlined as BaseApartmentOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ApartmentOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseApartmentOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-apartment-outlined text-xl"
            role="img"
            aria-label="apartment-outlined"
            innerHTML={svgHTMLString}
        />
    );
};