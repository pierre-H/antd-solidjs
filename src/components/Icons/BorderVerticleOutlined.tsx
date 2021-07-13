import { BorderVerticleOutlined as BaseBorderVerticleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BorderVerticleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBorderVerticleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-border-verticle-outlined text-xl"
            role="img"
            aria-label="border-verticle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};