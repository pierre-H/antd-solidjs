import { MinusOutlined as BaseMinusOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MinusOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMinusOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-minus-outlined text-xl"
            role="img"
            aria-label="minus-outlined"
            innerHTML={svgHTMLString}
        />
    );
};