import { FundProjectionScreenOutlined as BaseFundProjectionScreenOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FundProjectionScreenOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFundProjectionScreenOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fund-projection-screen-outlined text-xl"
            role="img"
            aria-label="fund-projection-screen-outlined"
            innerHTML={svgHTMLString}
        />
    );
};