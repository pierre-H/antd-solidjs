import { AudioFilled as BaseAudioFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AudioFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAudioFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-audio-filled text-xl"
            role="img"
            aria-label="audio-filled"
            innerHTML={svgHTMLString}
        />
    );
};