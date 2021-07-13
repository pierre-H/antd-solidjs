import { BorderLeftOutlined as BaseBorderLeftOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BorderLeftOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBorderLeftOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-border-left-outlined text-xl"
            role="img"
            aria-label="border-left-outlined"
            innerHTML={svgHTMLString}
        />
    );
};