import { ForwardFilled as BaseForwardFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const ForwardFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseForwardFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-forward-filled text-xl"
            role="img"
            aria-label="forward-filled"
            innerHTML={svgHTMLString}
        />
    );
};