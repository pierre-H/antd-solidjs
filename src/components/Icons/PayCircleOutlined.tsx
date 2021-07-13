import { PayCircleOutlined as BasePayCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PayCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePayCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-pay-circle-outlined text-xl"
            role="img"
            aria-label="pay-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};