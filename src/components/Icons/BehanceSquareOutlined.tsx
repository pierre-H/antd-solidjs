import { BehanceSquareOutlined as BaseBehanceSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BehanceSquareOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBehanceSquareOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-behance-square-outlined text-xl"
            role="img"
            aria-label="behance-square-outlined"
            innerHTML={svgHTMLString}
        />
    );
};