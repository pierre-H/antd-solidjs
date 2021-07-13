import { TrademarkCircleTwoTone as BaseTrademarkCircleTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TrademarkCircleTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTrademarkCircleTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-trademark-circle-two-tone text-xl"
            role="img"
            aria-label="trademark-circle-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};