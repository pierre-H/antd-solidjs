import { ShakeOutlined as BaseShakeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ShakeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseShakeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-shake-outlined text-xl"
            role="img"
            aria-label="shake-outlined"
            innerHTML={svgHTMLString}
        />
    );
};