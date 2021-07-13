import { MoreOutlined as BaseMoreOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MoreOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMoreOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-more-outlined text-xl"
            role="img"
            aria-label="more-outlined"
            innerHTML={svgHTMLString}
        />
    );
};