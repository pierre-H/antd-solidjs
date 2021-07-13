import { DislikeFilled as BaseDislikeFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const DislikeFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseDislikeFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-dislike-filled text-xl"
            role="img"
            aria-label="dislike-filled"
            innerHTML={svgHTMLString}
        />
    );
};