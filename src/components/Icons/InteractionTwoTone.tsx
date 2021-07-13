import { InteractionTwoTone as BaseInteractionTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InteractionTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInteractionTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-interaction-two-tone text-xl"
            role="img"
            aria-label="interaction-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};