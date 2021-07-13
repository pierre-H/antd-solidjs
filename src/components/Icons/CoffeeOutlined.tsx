import { CoffeeOutlined as BaseCoffeeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CoffeeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCoffeeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-coffee-outlined text-xl"
            role="img"
            aria-label="coffee-outlined"
            innerHTML={svgHTMLString}
        />
    );
};