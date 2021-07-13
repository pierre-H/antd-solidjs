import { PlusSquareOutlined as BasePlusSquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PlusSquareOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePlusSquareOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-plus-square-outlined text-xl"
            role="img"
            aria-label="plus-square-outlined"
            innerHTML={svgHTMLString}
        />
    );
};