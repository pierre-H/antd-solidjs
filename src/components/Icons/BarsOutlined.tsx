import { BarsOutlined as BaseBarsOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BarsOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBarsOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bars-outlined text-xl"
            role="img"
            aria-label="bars-outlined"
            innerHTML={svgHTMLString}
        />
    );
};