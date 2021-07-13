import { StockOutlined as BaseStockOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const StockOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseStockOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-stock-outlined text-xl"
            role="img"
            aria-label="stock-outlined"
            innerHTML={svgHTMLString}
        />
    );
};