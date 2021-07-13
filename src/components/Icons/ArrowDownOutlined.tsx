import { ArrowDownOutlined as BaseArrowDownOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ArrowDownOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseArrowDownOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-arrow-down-outlined text-xl"
            role="img"
            aria-label="arrow-down-outlined"
            innerHTML={svgHTMLString}
        />
    );
};