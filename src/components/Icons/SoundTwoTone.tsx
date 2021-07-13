import { SoundTwoTone as BaseSoundTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SoundTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSoundTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-sound-two-tone text-xl"
            role="img"
            aria-label="sound-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};