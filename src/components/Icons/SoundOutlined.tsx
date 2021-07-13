import { SoundOutlined as BaseSoundOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const SoundOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseSoundOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-sound-outlined text-xl"
            role="img"
            aria-label="sound-outlined"
            innerHTML={svgHTMLString}
        />
    );
};