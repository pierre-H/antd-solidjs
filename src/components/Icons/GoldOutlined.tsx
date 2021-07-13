import { GoldOutlined as BaseGoldOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GoldOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGoldOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-gold-outlined text-xl"
            role="img"
            aria-label="gold-outlined"
            innerHTML={svgHTMLString}
        />
    );
};