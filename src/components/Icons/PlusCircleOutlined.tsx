import { PlusCircleOutlined as BasePlusCircleOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PlusCircleOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePlusCircleOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-plus-circle-outlined text-xl"
            role="img"
            aria-label="plus-circle-outlined"
            innerHTML={svgHTMLString}
        />
    );
};