import { AudioMutedOutlined as BaseAudioMutedOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const AudioMutedOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseAudioMutedOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-audio-muted-outlined text-xl"
            role="img"
            aria-label="audio-muted-outlined"
            innerHTML={svgHTMLString}
        />
    );
};