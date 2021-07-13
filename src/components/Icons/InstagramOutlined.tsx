import { InstagramOutlined as BaseInstagramOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InstagramOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInstagramOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-instagram-outlined text-xl"
            role="img"
            aria-label="instagram-outlined"
            innerHTML={svgHTMLString}
        />
    );
};