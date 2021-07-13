import { BlockOutlined as BaseBlockOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BlockOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBlockOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-block-outlined text-xl"
            role="img"
            aria-label="block-outlined"
            innerHTML={svgHTMLString}
        />
    );
};