import { InteractionOutlined as BaseInteractionOutlined } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const InteractionOutlined = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseInteractionOutlined, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-interaction-outlined text-xl"
            role="img"
            aria-label="interaction-outlined"
            innerHTML={svgHTMLString}
        />
    );
};