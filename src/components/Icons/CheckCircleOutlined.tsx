import { CheckCircleOutlined as BaseCheckCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CheckCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCheckCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-check-circle-outlined text-xl"
            role="img"
            aria-label="check-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};