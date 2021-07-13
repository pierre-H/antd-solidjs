import { GifOutlined as BaseGifOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const GifOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseGifOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-gif-outlined text-xl"
            role="img"
            aria-label="gif-outlined"
            innerHTML={svgHTMLString}
        />
    );
};