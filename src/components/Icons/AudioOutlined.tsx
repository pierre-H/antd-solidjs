import { AudioOutlined as BaseAudioOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AudioOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAudioOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-audio-outlined text-xl"
            role="img"
            aria-label="audio-outlined"
            innerHTML={svgHTMLString}
        />
    );
};