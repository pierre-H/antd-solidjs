import { LikeFilled as BaseLikeFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const LikeFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseLikeFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-like-filled text-xl"
            role="img"
            aria-label="like-filled"
            innerHTML={svgHTMLString}
        />
    );
};