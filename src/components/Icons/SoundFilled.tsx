import { SoundFilled as BaseSoundFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SoundFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSoundFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-sound-filled text-xl"
            role="img"
            aria-label="sound-filled"
            innerHTML={svgHTMLString}
        />
    );
};