import { InstagramFilled as BaseInstagramFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InstagramFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInstagramFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-instagram-filled text-xl"
            role="img"
            aria-label="instagram-filled"
            innerHTML={svgHTMLString}
        />
    );
};