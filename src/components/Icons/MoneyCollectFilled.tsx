import { MoneyCollectFilled as BaseMoneyCollectFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MoneyCollectFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMoneyCollectFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-money-collect-filled text-xl"
            role="img"
            aria-label="money-collect-filled"
            innerHTML={svgHTMLString}
        />
    );
};