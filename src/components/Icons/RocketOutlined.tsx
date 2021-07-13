import { RocketOutlined as BaseRocketOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const RocketOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseRocketOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-rocket-outlined text-xl"
            role="img"
            aria-label="rocket-outlined"
            innerHTML={svgHTMLString}
        />
    );
};