import { MessageFilled as BaseMessageFilled } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MessageFilled = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMessageFilled, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-message-filled text-xl"
            role="img"
            aria-label="message-filled"
            innerHTML={svgHTMLString}
        />
    );
};