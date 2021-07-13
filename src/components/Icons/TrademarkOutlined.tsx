import { TrademarkOutlined as BaseTrademarkOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TrademarkOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTrademarkOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-trademark-outlined text-xl"
            role="img"
            aria-label="trademark-outlined"
            innerHTML={svgHTMLString}
        />
    );
};