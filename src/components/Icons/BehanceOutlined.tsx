import { BehanceOutlined as BaseBehanceOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BehanceOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBehanceOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-behance-outlined text-xl"
            role="img"
            aria-label="behance-outlined"
            innerHTML={svgHTMLString}
        />
    );
};