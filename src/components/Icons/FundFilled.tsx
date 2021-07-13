import { FundFilled as BaseFundFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FundFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFundFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fund-filled text-xl"
            role="img"
            aria-label="fund-filled"
            innerHTML={svgHTMLString}
        />
    );
};