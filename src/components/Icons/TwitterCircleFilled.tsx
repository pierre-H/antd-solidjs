import { TwitterCircleFilled as BaseTwitterCircleFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const TwitterCircleFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseTwitterCircleFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-twitter-circle-filled text-xl"
            role="img"
            aria-label="twitter-circle-filled"
            innerHTML={svgHTMLString}
        />
    );
};