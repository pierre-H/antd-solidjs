import { AudioTwoTone as BaseAudioTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AudioTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAudioTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-audio-two-tone text-xl"
            role="img"
            aria-label="audio-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};