import { DollarCircleOutlined as BaseDollarCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DollarCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDollarCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dollar-circle-outlined text-xl"
            role="img"
            aria-label="dollar-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};