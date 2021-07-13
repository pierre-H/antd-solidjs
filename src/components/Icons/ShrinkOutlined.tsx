import { ShrinkOutlined as BaseShrinkOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ShrinkOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseShrinkOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-shrink-outlined text-xl"
            role="img"
            aria-label="shrink-outlined"
            innerHTML={svgHTMLString}
        />
    );
};