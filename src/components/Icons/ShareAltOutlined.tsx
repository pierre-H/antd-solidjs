import { ShareAltOutlined as BaseShareAltOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ShareAltOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseShareAltOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-share-alt-outlined text-xl"
            role="img"
            aria-label="share-alt-outlined"
            innerHTML={svgHTMLString}
        />
    );
};