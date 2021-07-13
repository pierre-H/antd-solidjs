import { CloseSquareTwoTone as BaseCloseSquareTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const CloseSquareTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseCloseSquareTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-close-square-two-tone text-xl"
            role="img"
            aria-label="close-square-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};