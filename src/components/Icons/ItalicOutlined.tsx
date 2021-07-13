import { ItalicOutlined as BaseItalicOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ItalicOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseItalicOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-italic-outlined text-xl"
            role="img"
            aria-label="italic-outlined"
            innerHTML={svgHTMLString}
        />
    );
};