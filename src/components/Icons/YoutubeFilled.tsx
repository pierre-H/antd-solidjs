import { YoutubeFilled as BaseYoutubeFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const YoutubeFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseYoutubeFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-youtube-filled text-xl"
            role="img"
            aria-label="youtube-filled"
            innerHTML={svgHTMLString}
        />
    );
};