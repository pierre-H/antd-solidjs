import { FundOutlined as BaseFundOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FundOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFundOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fund-outlined text-xl"
            role="img"
            aria-label="fund-outlined"
            innerHTML={svgHTMLString}
        />
    );
};