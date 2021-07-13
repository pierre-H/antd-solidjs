import { MinusSquareOutlined as BaseMinusSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MinusSquareOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMinusSquareOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-minus-square-outlined text-xl"
            role="img"
            aria-label="minus-square-outlined"
            innerHTML={svgHTMLString}
        />
    );
};