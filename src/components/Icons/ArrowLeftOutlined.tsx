import { ArrowLeftOutlined as BaseArrowLeftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ArrowLeftOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseArrowLeftOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-arrow-left-outlined text-xl"
            role="img"
            aria-label="arrow-left-outlined"
            innerHTML={svgHTMLString}
        />
    );
};