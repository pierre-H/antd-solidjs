import { FundViewOutlined as BaseFundViewOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FundViewOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFundViewOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fund-view-outlined text-xl"
            role="img"
            aria-label="fund-view-outlined"
            innerHTML={svgHTMLString}
        />
    );
};