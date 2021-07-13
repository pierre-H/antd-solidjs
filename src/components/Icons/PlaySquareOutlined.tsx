import { PlaySquareOutlined as BasePlaySquareOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PlaySquareOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePlaySquareOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-play-square-outlined text-xl"
            role="img"
            aria-label="play-square-outlined"
            innerHTML={svgHTMLString}
        />
    );
};