import { MoneyCollectTwoTone as BaseMoneyCollectTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MoneyCollectTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMoneyCollectTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-money-collect-two-tone text-xl"
            role="img"
            aria-label="money-collect-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};