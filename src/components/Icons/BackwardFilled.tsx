import { BackwardFilled as BaseBackwardFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const BackwardFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseBackwardFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-backward-filled text-xl"
            role="img"
            aria-label="backward-filled"
            innerHTML={svgHTMLString}
        />
    );
};