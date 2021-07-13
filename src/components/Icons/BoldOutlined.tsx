import { BoldOutlined as BaseBoldOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BoldOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBoldOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-bold-outlined text-xl"
            role="img"
            aria-label="bold-outlined"
            innerHTML={svgHTMLString}
        />
    );
};