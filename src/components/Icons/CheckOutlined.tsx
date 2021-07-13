import { CheckOutlined as BaseCheckOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CheckOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCheckOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-check-outlined text-xl"
            role="img"
            aria-label="check-outlined"
            innerHTML={svgHTMLString}
        />
    );
};