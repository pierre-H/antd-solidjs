import { PlusOutlined as BasePlusOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PlusOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePlusOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-plus-outlined text-xl"
            role="img"
            aria-label="plus-outlined"
            innerHTML={svgHTMLString}
        />
    );
};