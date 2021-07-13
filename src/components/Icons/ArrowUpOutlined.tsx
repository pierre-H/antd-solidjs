import { ArrowUpOutlined as BaseArrowUpOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ArrowUpOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseArrowUpOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-arrow-up-outlined text-xl"
            role="img"
            aria-label="arrow-up-outlined"
            innerHTML={svgHTMLString}
        />
    );
};