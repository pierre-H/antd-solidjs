import { TrademarkCircleFilled as BaseTrademarkCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TrademarkCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTrademarkCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-trademark-circle-filled text-xl"
            role="img"
            aria-label="trademark-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};