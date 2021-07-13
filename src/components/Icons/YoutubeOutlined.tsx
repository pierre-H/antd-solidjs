import { YoutubeOutlined as BaseYoutubeOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const YoutubeOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseYoutubeOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-youtube-outlined text-xl"
            role="img"
            aria-label="youtube-outlined"
            innerHTML={svgHTMLString}
        />
    );
};