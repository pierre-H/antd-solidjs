import { CheckSquareOutlined as BaseCheckSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CheckSquareOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCheckSquareOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-check-square-outlined text-xl"
            role="img"
            aria-label="check-square-outlined"
            innerHTML={svgHTMLString}
        />
    );
};