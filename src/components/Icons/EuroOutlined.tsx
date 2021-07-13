import { EuroOutlined as BaseEuroOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EuroOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEuroOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-euro-outlined text-xl"
            role="img"
            aria-label="euro-outlined"
            innerHTML={svgHTMLString}
        />
    );
};