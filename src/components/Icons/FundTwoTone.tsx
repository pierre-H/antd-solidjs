import { FundTwoTone as BaseFundTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const FundTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseFundTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-fund-two-tone text-xl"
            role="img"
            aria-label="fund-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};