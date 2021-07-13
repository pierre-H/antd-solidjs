import { MinusCircleOutlined as BaseMinusCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MinusCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMinusCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-minus-circle-outlined text-xl"
            role="img"
            aria-label="minus-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};