import { DollarOutlined as BaseDollarOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DollarOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDollarOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dollar-outlined text-xl"
            role="img"
            aria-label="dollar-outlined"
            innerHTML={svgHTMLString}
        />
    );
};