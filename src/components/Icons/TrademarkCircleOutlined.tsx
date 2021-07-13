import { TrademarkCircleOutlined as BaseTrademarkCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TrademarkCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTrademarkCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-trademark-circle-outlined text-xl"
            role="img"
            aria-label="trademark-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};