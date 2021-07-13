import { MoneyCollectOutlined as BaseMoneyCollectOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MoneyCollectOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMoneyCollectOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-money-collect-outlined text-xl"
            role="img"
            aria-label="money-collect-outlined"
            innerHTML={svgHTMLString}
        />
    );
};