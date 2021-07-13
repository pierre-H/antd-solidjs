import { EuroCircleOutlined as BaseEuroCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const EuroCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseEuroCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-euro-circle-outlined text-xl"
            role="img"
            aria-label="euro-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};