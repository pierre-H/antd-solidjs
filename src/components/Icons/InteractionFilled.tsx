import { InteractionFilled as BaseInteractionFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InteractionFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInteractionFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-interaction-filled text-xl"
            role="img"
            aria-label="interaction-filled"
            innerHTML={svgHTMLString}
        />
    );
};