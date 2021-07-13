import { ArrowsAltOutlined as BaseArrowsAltOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ArrowsAltOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseArrowsAltOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-arrows-alt-outlined text-xl"
            role="img"
            aria-label="arrows-alt-outlined"
            innerHTML={svgHTMLString}
        />
    );
};