import { MessageTwoTone as BaseMessageTwoTone } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

export const MessageTwoTone = () => {
    const svgHTMLString = renderIconDefinitionToSVGElement(BaseMessageTwoTone, {
        extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
    });
    return (
        <span
            class="anticon anticon-message-two-tone text-xl"
            role="img"
            aria-label="message-two-tone"
            innerHTML={svgHTMLString}
        />
    );
};