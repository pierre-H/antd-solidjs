import { PlaySquareFilled as BasePlaySquareFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const PlaySquareFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BasePlaySquareFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-play-square-filled text-xl"
            role="img"
            aria-label="play-square-filled"
            innerHTML={svgHTMLString}
        />
    );
};