import { PercentageOutlined as BasePercentageOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PercentageOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePercentageOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-percentage-outlined text-xl"
            role="img"
            aria-label="percentage-outlined"
            innerHTML={svgHTMLString}
        />
    );
};