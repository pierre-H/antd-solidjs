import { ArrowRightOutlined as BaseArrowRightOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ArrowRightOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseArrowRightOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-arrow-right-outlined text-xl"
            role="img"
            aria-label="arrow-right-outlined"
            innerHTML={svgHTMLString}
        />
    );
};